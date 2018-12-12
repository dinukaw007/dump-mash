import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit , OnDestroy{
  //google_analytics: Subscription;
  constructor(private authService : AuthService, private router: Router) {
   
   }

  ngOnInit() {
  }

  onSingnin(form : NgForm) {
    const  email = form.value.email
    const  password = form.value.password
    this.authService.signinUser(email,password);
  }

  ngAfterViewInit() {
    // this.google_analytics = this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     (<any>window).ga('set', 'page', event.urlAfterRedirects);
    //     (<any>window).ga('send', 'pageview');
    //   }
    // });
  }

  ngOnDestroy() {
    //this.google_analytics.unsubscribe();
  }
}
