import { DataStorageService } from './../../shared/data.storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionPoint } from '../collection-point.model';
import { CollectionPointservice } from '../collection-points.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collection-points-list',
  templateUrl: './collection-points-list.component.html',
  styleUrls: ['./collection-points-list.component.css']
})
export class CollectionPointsListComponent implements OnInit, OnDestroy {
  collectionPointSubscription: Subscription;
  constructor(private collectionPointservice: CollectionPointservice, private router: Router, private route: ActivatedRoute, private dataStorageService : DataStorageService) { }
  collectionPoints: CollectionPoint[];
  collectableMaterialsStatus :string = '';
  isDataAvailable:boolean = false;

  ngOnInit() {
    this.collectionPointSubscription = this.collectionPointservice.collectionPointChanged.subscribe(
      (collectionPoints: CollectionPoint[]) => {
        this.collectionPoints = collectionPoints;
        this.isDataAvailable = true;
      }
    );
    //his.collectionPoints = this.collectionPointservice.getCollectionPoints();
    this.dataStorageService.getCollectionPoints()
  }

  onFetchData(){
    this.dataStorageService.getCollectionPoints();
  }

  onNewCollectionPoint() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy() {
    this.collectionPointSubscription.unsubscribe();
  }
}
