import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Recepten', url: '/recepten', icon: 'restaurant' },
    { title: 'Boodschappen', url: '/boodschappen', icon: 'bag-handle' },
    { title: 'Dagboek', url: '/dagboek', icon: 'newspaper' },
  ];
  constructor() {}
}
