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

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDhMPc3ZvDIYCkC4ly_GUNE155qG1zNw5g",
      authDomain: "udemy-ng-http-7f499.firebaseapp.com"
    });
  }
}
