import { Component, OnInit } from '@angular/core';
import { slides } from '../components/data';
import { Slides } from '../components/slides';
declare let $: any;

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slide: Slides;
  slides: any;
  isHiddenVizComponent: boolean;
  isSideEmitter: boolean;

  constructor() {
    this.slides = slides;
    this.isHiddenVizComponent = true;
  }

  ngOnInit() {
    this.slide = slides[0];
  }

  chooseSide(slide, isSideEmitter) {
    console.log(isSideEmitter);
    this.slide = slide;
    this.isSideEmitter = isSideEmitter;
    if (document.documentElement.clientWidth < 768) {
      $('#myModal').modal('show');
    } else {
      window.scrollTo(0, 0);
    }
    // this.isSideEmitter = false;
  }

  chooseMain(slide) {
    this.slide = slide;
    $('#myModal').modal('show');
  }

  hide(isHidden) {
    this.isHiddenVizComponent = isHidden;
  }

}
