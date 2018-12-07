import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
//import 'firebase/auth';
@Injectable()
export class AuthService {

    constructor(private router: Router) {

    }
    token: string = ""
    signupUser(name: string, email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(
            error => {
                var errorMessage = error.message;
            }
        )
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken().then(
                    (tok: string) => {
                        this.token = tok;
                    }
                );
            })
            .catch(
                error => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                }
            )
    }

    getToken() {
        firebase.auth().currentUser.getIdToken().then(
            (tok: string) => {
                this.token = tok;
            }
        );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.router.navigate(['/signin']);
        this.token = null;
    }
}