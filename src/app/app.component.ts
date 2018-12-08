import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dump-mash';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "[apiKey]",
      authDomain: "[authDomain]"
    });
  }
}
// apiKey: "[apiKey]",
// authDomain: "[authDomain]",
