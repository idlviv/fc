import { Component, OnInit } from '@angular/core';
import { slides } from '../components/data';
import { Slides } from '../components/slides';
declare var $: any;

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


  }

  hide(isHidden) {
    this.isHiddenVizComponent = isHidden;
  }

  showModal() {

    // let p : HTMLElement = <HTMLElement>document.querySelector('#myModal');
    // console.log(p);
    // p.classList.remove('fade');
    // p.classList.add('in');
    // p.style.display = "block"
    // console.log($('#myModal').parent);
    $('#myModal').modal('show');
  }
}
