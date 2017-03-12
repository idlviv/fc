import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;

  constructor() {
    this.name = 'Angular2';
  }

  hide() {
    document.querySelector('.navbar-collapse').classList.remove('in');
  }
}
