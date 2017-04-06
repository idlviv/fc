import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Slides } from './slides';

@Component({
  moduleId: module.id,
  selector: 'app-viz-component',
  templateUrl: './viz.component.html',
  styleUrls: ['./viz.component.css']
})

export class VizComponent  {
  @Input() slide: Slides;
  @Input() isHiddenVizComponent: boolean;
  @Output() choose = new EventEmitter();

  constructor() {}

  onChoose(slide: Slides) {
    this.choose.emit(slide);
  }

  hide() {
    if (this.isHiddenVizComponent) {
      return 'ifHidden';
    } else {
      return 'ifNotHidden';
    }
  }

}
