import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from './ui/ui.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CollectionPointservice } from './collection-points/collection-points.service';
import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './shared/data.storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { CollectionPointsModule } from './collection-points/collection-points.module';
import { AgmCoreModule } from '@agm/core';
import { DeviceDetectorModule } from 'ngx-device-detector';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,    
    SignupComponent, 
    SigninComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: "[GOOGLE MAP API KEY]",
      libraries: ["places"]
    }),
    BrowserModule,
    CollectionPointsModule,
    AppRoutingModule,
    FormsModule,
    DeviceDetectorModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,   
    UiModule
  ],
  providers: [CollectionPointservice, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
