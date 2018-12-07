
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CollectionPointsStartComponent } from './collection-points/collection-points-start/collection-points-start.component';
import { CollectionPointsListComponent } from './collection-points/collection-points-list/collection-points-list.component';
import { CollectionPointsEditComponent } from './collection-points/collection-points-edit/collection-points-edit.component';
import { CollectionPointsDetailComponent } from './collection-points/collection-points-detail/collection-points-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionPointsComponent } from './collection-points/collection-points.component';
import { AuthGuard } from './auth/auth-guard.service';


const routes: Routes = [
  {path:'', redirectTo : '/home', pathMatch:'full'},
  {path:'home', component : HomeComponent},  
  {path:'collection-point', component : CollectionPointsComponent ,children:[
    {path:'', component : CollectionPointsStartComponent},  
    {path:'new', component: CollectionPointsEditComponent,canActivate:[AuthGuard] },
    {path:':id', component : CollectionPointsDetailComponent},  
    {path:'list', component : CollectionPointsListComponent},  
    {path:':id/edit', component : CollectionPointsEditComponent,canActivate:[AuthGuard]},  
  ]},  
  {path:'about', component : AboutComponent},  
  {path:'contact', component : ContactComponent},  
  {path:'signup', component : SignupComponent},  
  {path:'signin', component : SigninComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
