import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';


@Injectable()
export class AuthGuard implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    constructor(private authService: AuthService) {

    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //return this.authService.isAuthenticated();
        if (this.authService.isAuthenticated()) {
            console.log(true);
            return true;
        } else {
            //this.router.navigate(['/login']);
            console.log(false);
            return false;
        }
    }

   


}