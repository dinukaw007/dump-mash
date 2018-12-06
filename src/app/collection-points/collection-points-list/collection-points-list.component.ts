import { Component, OnInit } from '@angular/core';
import { CollectionPoint } from '../collection-point.model';
import { CollectionPointservice } from '../collection-points.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-collection-points-list',
  templateUrl: './collection-points-list.component.html',
  styleUrls: ['./collection-points-list.component.css']
})
export class CollectionPointsListComponent implements OnInit {
  collectionPointSubscription: Subscription;
  constructor(private collectionPointservice : CollectionPointservice) { }
  collectionPoints: CollectionPoint[]

  onNewCollectionPoint(){
    
  }
  ngOnInit() {
    this.collectionPointSubscription= this.collectionPointservice.collectionPointChanged.subscribe(
      (collectionPoints : CollectionPoint[] )=>{
        this.collectionPoints = collectionPoints;
      }
    );
    this.collectionPoints = this.collectionPointservice.getCollectionPoints();
  }

}
