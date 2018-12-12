import { DataStorageService } from './../../shared/data.storage.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CollectionPoint } from '../collection-point.model';
import { CollectionPointservice } from '../collection-points.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-collection-points-list',
  templateUrl: './collection-points-list.component.html',
  styleUrls: ['./collection-points-list.component.css']
})
export class CollectionPointsListComponent implements OnInit, OnDestroy, AfterViewInit  {
  collectionPointSubscription: Subscription;
  google_analytics: Subscription;
  private isMobileResolution: boolean;
  constructor(private collectionPointservice: CollectionPointservice,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService,
    public authService: AuthService) {

    

  }

  collectionPoints: CollectionPoint[];
  collectableMaterialsStatus: string = '';
  locationValue: string = '';
  isDataAvailable: boolean = false;

  getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }


  ngOnInit() {
    this.collectionPointSubscription = this.collectionPointservice.collectionPointChanged.subscribe(
      (collectionPoints: CollectionPoint[]) => {
        this.collectionPoints = collectionPoints;
        this.isDataAvailable = true;
      }
    );
    //his.collectionPoints = this.collectionPointservice.getCollectionPoints();
    this.dataStorageService.getCollectionPoints();

    if (window.innerWidth <= 1024) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  onFetchData() {
    this.dataStorageService.getCollectionPoints();
  }

  ngAfterViewInit(){
    this.google_analytics = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  onNewCollectionPoint() {
    (<any>window).ga('send', 'event', {
      eventCategory: 'navigation',
      eventLabel: 'navigateLabel',
      eventAction: 'navigate'      
    });
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy() {
    this.collectionPointSubscription.unsubscribe();
    this.google_analytics.unsubscribe();
  }
}
