import { Component, Output, Input, EventEmitter, Renderer } from '@angular/core';
import { Slides } from './slides';

@Component({
  moduleId: module.id,
  selector: 'side-component',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {
  @Output() choose = new EventEmitter();
  @Output() hide = new EventEmitter();
  // @Output() callModal = new EventEmitter();
  @Input() slides: Slides[];


  constructor(private render:Renderer) {
  }

  onChoose(slide) {
    this.choose.emit(slide);
  }

  onHide(isHidden) {
    this.hide.emit(isHidden);
  }

  changeImgStyle(e: any) {
      // Display all images
    this.onHide(false);

      // Change class after click
    if (e.target.classList.contains('img-def')) {
      // If img wasn't clicked before

      // take all previously clicked images to default class
      let sel = document.querySelectorAll('.thumbnailImages');
      Array.from(sel).forEach(function (item) {
        item.classList.remove('img-clicked');
        item.classList.add('img-def');
      });
      // take only clicked image to clicked class
      this.render.setElementClass(e.target,'img-def',false);
      this.render.setElementClass(e.target,'img-clicked',true);
    } else {
      // if img already clicked take it to default class
      let sel = document.querySelectorAll('.thumbnailImages');
      Array.from(sel).forEach(function (item) {
        item.classList.remove('img-clicked');
        item.classList.add('img-def');
      });
      // hide viz component
      this.onHide(true);
    }

  }
}
