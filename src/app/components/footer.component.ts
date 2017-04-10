import { Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent  {
  @Input() isSideEmitter: boolean;

  constructor() {}

}
