import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.css']
})
export class BasicCardComponent {
  @Input() title: string = '';
  @Input() body: string = '';
  @Input() srcImage: string = '';

  test: boolean = false;

  onElementVisible(visibilityPercentage: number) {
    this.title = visibilityPercentage.toString();
  }

  activate() {
    this.test = true;
    console.log('activate');
  }

  deactivate() {
    this.test = false;
    console.log('deactivate');
  }
}
