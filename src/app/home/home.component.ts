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


  constructor() {
    this.slides = slides;
    this.isHiddenVizComponent = true;
  }

  ngOnInit() {
    this.slide = slides[0];
  }

  choose(slide) {
    this.slide = slide;
    if (document.documentElement.clientWidth < 768) {
      $('#myModal').modal('show');
    } else {
      window.scrollTo(0, 150);
    }


  }

  hide(isHidden) {
    this.isHiddenVizComponent = isHidden;
  }

}
