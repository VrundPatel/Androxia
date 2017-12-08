import {
  Component,
  ElementRef,
  HostListener
} from '@angular/core';

import { WOW } from 'wowjs/dist/wow.min';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  ngAfterViewInit() {
    console.log(window.pageYOffset);
    const wow = new WOW();
    wow.init();
  }

  constructor(public el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    console.log('hello', scrollPosition);

    // if (scrollPosition >= componentPosition) {
    //   this.state = 'show'
    // } else {
    //   this.state = 'hide'
    // }

  }

}
