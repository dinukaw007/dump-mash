import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private isMobileResolution: boolean;
  constructor(public authService : AuthService) { }
  
  getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

  ngOnInit() {
    if (window.innerWidth <= 411) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }
  
  logout(){
    this.authService.logout();
  }
}
