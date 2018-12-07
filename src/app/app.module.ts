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
import { CollectionPointsListComponent } from './collection-points/collection-points-list/collection-points-list.component';
import { CollectionPointsEditComponent } from './collection-points/collection-points-edit/collection-points-edit.component';
import { CollectionPointsDetailComponent } from './collection-points/collection-points-detail/collection-points-detail.component';
import { CollectionPointsStartComponent } from './collection-points/collection-points-start/collection-points-start.component';
import { CollectionPointsItemComponent } from './collection-points/collection-points-list/collection-points-item/collection-points-item.component';
import { CollectionPointsComponent } from './collection-points/collection-points.component';
import { CollectionPointservice } from './collection-points/collection-points.service';
import { FilterPipe } from './shared/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './shared/data.storage.service';
import { LocationFilterPipe } from './shared/location-filter.pipe';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,    
    CollectionPointsComponent, HomeComponent, AboutComponent, ContactComponent, CollectionPointsListComponent, CollectionPointsEditComponent, CollectionPointsDetailComponent, CollectionPointsStartComponent, CollectionPointsItemComponent, FilterPipe, LocationFilterPipe, SignupComponent, SigninComponent    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule,
    UiModule  
  ],
  providers: [CollectionPointservice,DataStorageService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
