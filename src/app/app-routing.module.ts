import { SigninComponent } from './auth/signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo : '/home', pathMatch:'full'},
  {path:'home', component : HomeComponent},
  {path:'about', component : AboutComponent},  
  {path:'contact', component : ContactComponent},  
  // {path:'signup', component : SignupComponent},  
  {path:'signin', component : SigninComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
