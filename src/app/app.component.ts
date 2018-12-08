import { AuthService } from 'src/app/auth/auth.service';
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

  constructor(private authService: AuthService) {
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "[apiKey]",
      authDomain: "[authDomain]",
    });
    firebase.auth().onAuthStateChanged(
      authState => {
        authState.getIdToken().then(
          token => this.authService.token = token
        )
      }
    );
  }
}
// apiKey: "[apiKey]",
// authDomain: "[authDomain]",
