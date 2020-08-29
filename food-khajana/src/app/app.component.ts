import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'food-khajana';

  loadedFeature = 'recipe';

  ngOnInit() {
    // Because this needs to be configured when the App Starts
    firebase.initializeApp({
      apiKey: 'AIzaSyDIYZ130SFpf8ssZK1bi_kEZnuwjyM9-gw',
      authDomain: 'ng-food-khajan.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
