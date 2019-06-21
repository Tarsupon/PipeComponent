import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pipe';
  myNumber: string;

  constructor() {
    this.myNumber = '331112233';
  }
}
