import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { delay, filter, Subject } from "rxjs";

@Directive({
  selector: '[appObserveVisibility]'
})
export class ObserveVisibilityDirective implements OnDestroy, OnInit, AfterViewInit {
  @Input() stopObserving = true;
  @Input() debounceTime = 0;
  @Input() threshold = 0.5;

  @Output() visible = new EventEmitter(); // Cambiado a number para emitir el valor en porcentaje
  @Output() hidden = new EventEmitter();

  private observer: IntersectionObserver | undefined;
  private subject$ = new Subject<{
    entry: IntersectionObserverEntry;
    observer: IntersectionObserver;
  }>();

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.createObserver();
  }

  ngAfterViewInit() {
    this.startObservingElements();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    this.subject$.complete();
  }

  private isVisible(element: HTMLElement): Promise<number> {
    return new Promise(resolve => {
      const observer = new IntersectionObserver(([entry]) => {
        resolve(entry.intersectionRatio);
        observer.disconnect();
      });

      observer.observe(element);
    });
  }


  private createObserver() {
    const options = {
      rootMargin: '0px',
      threshold: this.threshold,
    };

    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting || entry.intersectionRatio > 0;

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (isIntersecting(entry)) {
          this.subject$.next({ entry, observer });
        }
      });
    }, options);
  }

  private startObservingElements() {
    if (!this.observer) {
      return;
    }

    this.observer.observe(this.element.nativeElement);

    this.subject$
      .pipe(delay(this.debounceTime), filter(Boolean))
      .subscribe(async ({ entry, observer }) => {
        const target = entry.target as HTMLElement;
        const visibilityPercentage = await this.isVisible(target) * 100;

        if (visibilityPercentage > 50) {
          this.visible.emit();
          console.log('visible');
        } else {
            this.hidden.emit();
            console.log('hidden');
        }

        //this.visible.emit();
        if (this.stopObserving){
          observer.unobserve(target);
        }
      });
  }
}
