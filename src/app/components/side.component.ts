import { Component, Output, Input, EventEmitter, Renderer } from '@angular/core';
import { Slides } from './slides';

@Component({
  moduleId: module.id,
  selector: 'app-side-component',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})

export class SideComponent {
  @Output() choose = new EventEmitter();
  @Output() hide = new EventEmitter();
  // @Output() callModal = new EventEmitter();
  @Input() slides: Slides[];

  constructor(private render: Renderer) {}

  onChoose(slide: Slides) {
    this.choose.emit(slide);
  }

  onHide(isHidden: boolean) {
    this.hide.emit(isHidden);
  }

  changeImgStyle(e: any) {
      // Display all images
    this.onHide(false);

      // Change class after click
    if (e.target.classList.contains('side-img-default')) {
      // If img wasn't clicked before

      // take all clicked images to default class
      const selectThumbnails = document.querySelectorAll('.side-img');
      Array.from(selectThumbnails).forEach(function(item) {
        item.classList.remove('side-img-clicked');
        item.classList.add('side-img-default');
      });
      // take only clicked image to clicked class
      this.render.setElementClass(e.target, 'side-img-default', false);
      this.render.setElementClass(e.target, 'side-img-clicked', true);
    } else {
      // if img already clicked take it to default class
      const selectThumbnails = document.querySelectorAll('.side-img');
      Array.from(selectThumbnails).forEach(function(item) {
        item.classList.remove('side-img-clicked');
        item.classList.add('side-img-default');
      });
      // hide viz component
      this.onHide(true);
    }
  }

}
