import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CollectionPointsComponent } from './collection-points.component';
import { CollectionPointsListComponent } from './collection-points-list/collection-points-list.component';
import { CollectionPointsEditComponent } from './collection-points-edit/collection-points-edit.component';
import { CollectionPointsDetailComponent } from './collection-points-detail/collection-points-detail.component';
import { CollectionPointsStartComponent } from './collection-points-start/collection-points-start.component';
import { CollectionPointsItemComponent } from './collection-points-list/collection-points-item/collection-points-item.component';
import { CollectionPointsRoutingModule } from './collection-points-routing.module';
import { FilterPipe } from '../shared/filter.pipe';
import { LocationFilterPipe } from '../shared/location-filter.pipe';



@NgModule({
  declarations: [
    CollectionPointsComponent,
    CollectionPointsListComponent,
    CollectionPointsEditComponent,
    CollectionPointsDetailComponent,
    CollectionPointsStartComponent,
    CollectionPointsItemComponent,
    FilterPipe,
    LocationFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollectionPointsRoutingModule   
  ]
})
export class CollectionPointsModule { }
