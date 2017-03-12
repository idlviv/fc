import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { VizComponent }  from './components/viz.component';
import { ModalComponent }  from './components/modal.component';
import { ContentComponent }  from './components/content.component';
import { CarouselComponent }  from './components/carousel.component';
import { SideComponent }  from './components/side.component';
import { TabComponent }  from './components/tab.component';
import { TabsComponent }  from './components/tabs.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BoldDirective } from './components/bold.directive';



@NgModule({
  imports:      [ BrowserModule, FormsModule, routes, HttpModule ],
  declarations: [ AppComponent, VizComponent, SideComponent, ModalComponent,
    ContentComponent, CarouselComponent, TabsComponent, TabComponent,  AboutComponent,  HomeComponent, BoldDirective],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
