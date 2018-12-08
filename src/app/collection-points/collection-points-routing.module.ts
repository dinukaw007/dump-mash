import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CollectionPointsComponent } from './collection-points.component';
import { CollectionPointsStartComponent } from './collection-points-start/collection-points-start.component';
import { CollectionPointsEditComponent } from './collection-points-edit/collection-points-edit.component';
import { CollectionPointsDetailComponent } from './collection-points-detail/collection-points-detail.component';
import { CollectionPointsListComponent } from './collection-points-list/collection-points-list.component';
import { AuthGuard } from '../auth/auth-guard.service';

const collectionPointsRoutes: Routes = [ 
  {path:'collection-point', component : CollectionPointsComponent ,children:[
    {path:'', component : CollectionPointsStartComponent},  
    {path:'new', component: CollectionPointsEditComponent,canActivate:[AuthGuard] },
    {path:':id', component : CollectionPointsDetailComponent},  
    {path:'list', component : CollectionPointsListComponent},  
    {path:':id/edit', component : CollectionPointsEditComponent,canActivate:[AuthGuard]},  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(collectionPointsRoutes)],
  exports: [RouterModule]
})
export class CollectionPointsRoutingModule { 


}