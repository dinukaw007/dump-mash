import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private isMobileResolution: boolean;
  private deviceInfo : any;
  constructor(public authService : AuthService,private deviceService: DeviceDetectorService) { }
  
  getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

  ngOnInit() {
      this.deviceInfo = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
      //console.log(this.deviceInfo);
      //console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
      //console.log(isTablet);  // returns if the device us a tablet (iPad etc)
      //console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.      
      if (window.innerWidth <= 411 || isMobile) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }
  
  logout(){
    this.authService.logout();
  }
}
