import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;  

    constructor(private authService :AuthService){

    }

   
    canActivate(route: ActivatedRouteSnapshot, state : RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }
    
    
}