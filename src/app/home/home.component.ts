import { Component, OnInit } from '@angular/core';
import { slides } from '../components/data';
import { Slides } from '../components/slides';
declare const $: any;

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  slide: Slides;
  slides: Slides[];
  isHiddenVizComponent: boolean;

  constructor() {
    this.slides = slides;
    this.isHiddenVizComponent = false;
  }

  ngOnInit() {
    this.slide = slides[0];
  }

  choose(slide: Slides, isSideEmitter: boolean) {
    this.slide = slide;
    if (document.documentElement.clientWidth < 768 && isSideEmitter || !isSideEmitter) {
      $('#myModal').modal('show');
    } else {
      window.scrollTo(0, 220);
    }
  }

  hide(isHidden: boolean) {
    this.isHiddenVizComponent = isHidden;
  }

}
