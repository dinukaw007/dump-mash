import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy, AfterViewInit {
  //google_analytics: Subscription;
  constructor(private authService : AuthService, private router: Router) {
    
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    //this.google_analytics.unsubscribe();
  }

  onSingnup(form : NgForm) {
    const  name = form.value.name
    const  email = form.value.email
    const  password = form.value.password
    this.authService.signupUser(name ,email,password);    
  }

  ngAfterViewInit() {
    // this.google_analytics = this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     (<any>window).ga('set', 'page', event.urlAfterRedirects);
    //     (<any>window).ga('send', 'pageview');
    //   }
    // });
  }

}
