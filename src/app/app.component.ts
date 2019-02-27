
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  items: Array<any> = []

  constructor() {
    this.items = [
      { name: 'assets/images/thumb-1.jpg' },
      { name: 'assets/images/thumb-2.jpg' },
      { name: 'assets/images/thumb-3.jpg' },
      { name: 'assets/images/thumb-4.jpg' },
      { name: 'assets/images/thumb-5.jpg' },
      { name: 'assets/images/thumb-6.jpg' },
    ]
  }
 
}
