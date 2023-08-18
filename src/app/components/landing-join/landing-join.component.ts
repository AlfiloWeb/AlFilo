import {Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-landing-join',
  templateUrl: './landing-join.component.html',
  styleUrls: ['./landing-join.component.css']
})
export class LandingJoinComponent implements AfterViewInit {

  @ViewChild('myVideo') videoElement!: ElementRef;

  ngAfterViewInit() {

    this.videoElement.nativeElement.muted = true;

  }


}