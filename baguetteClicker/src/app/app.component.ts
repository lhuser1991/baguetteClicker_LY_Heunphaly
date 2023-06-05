import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = "";
  copyrightYear: number = 0;
  copyrightName: string = "";

  constructor() {
    this.title = "Boulangerie de Heunpha-Ly";
    this.copyrightYear = 2023;
    this.copyrightName = "LY Heunpha-Ly";
  }
  

}
