import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-icon-morphing-demo';
  public isActive = false;
  public easing = 'quart-in-out';
  constructor() {
  }
}
