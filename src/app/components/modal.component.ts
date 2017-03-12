import { Component, Input} from '@angular/core';
import { Slides } from './slides';

@Component({
  moduleId: module.id,
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {
  @Input() slide: Slides;

  constructor() {
  }

clicker() {
}
}

