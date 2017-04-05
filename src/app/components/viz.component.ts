import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Slides } from './slides';

@Component({
  moduleId: module.id,
  selector: 'viz-component',
  templateUrl: './viz.component.html',
  styleUrls: ['./viz.component.css']
})
export class VizComponent  {
  @Input() slide: Slides;
  @Input() isHiddenVizComponent: boolean;
  @Output() chooseMain = new EventEmitter();

  constructor() {}

  onChoose(slide) {
    this.chooseMain.emit(slide);
  }

  hide() {
    if (this.isHiddenVizComponent) {
      return 'ifHidden';
    } else {
      return 'ifNotHidden';
    }
  }
}

