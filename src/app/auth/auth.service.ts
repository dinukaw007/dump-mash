import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
//import 'firebase/auth';
@Injectable()
export class AuthService {
    token: string = '';
    constructor(private router: Router) {

    }
   
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
                firebase.auth().currentUser.getIdToken().then(
                    (token: string) => {
                        this.token = token;
                        this.router.navigate(['/']);
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
        // firebase.auth().onAuthStateChanged(function (user) {
        //     if (user) {
        //         user.getIdToken().then(function (data) {
        //             console.log(data)
        //         });
        //     }
        // });
        firebase.auth().currentUser.getIdToken()
            .then(
                token => this.token = token
            )
        return this.token;
    }

    isAuthenticated() {        
        if(this.token === '' || this.token === null){
            return false;
        }else{
            return true;
        }
        
    }

    logout() {
        firebase.auth().signOut();
        this.router.navigate(['/signin']);
        this.token = null;
    }
}