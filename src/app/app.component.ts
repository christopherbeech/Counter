import { Component } from '@angular/core';

@Component({
  selector: 'cp-root',
  template: `<div>
    <h1>{{title}}</h1>
    <cp-counter></cp-counter>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter';
}
