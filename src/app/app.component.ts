import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor() {}

  hide() {
    document.querySelector('.navbar-collapse').classList.remove('in');
  }
}
