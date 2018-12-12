import { CollectionPointservice } from './../collection-points.service';
import { Component, OnInit, Input, ViewChild, NgZone, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';
import { CollectionPoint } from '../collection-point.model';
import { AuthService } from 'src/app/auth/auth.service';
import { MapsAPILoader } from '@agm/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-collection-points-detail',
  templateUrl: './collection-points-detail.component.html',
  styleUrls: ['./collection-points-detail.component.css']
})
export class CollectionPointsDetailComponent implements OnInit, OnDestroy, AfterViewInit {
  google_analytics: Subscription;
  @ViewChild('gmap') gmapElement: any;

  @ViewChild('search') searchElementRef: any;


  map: google.maps.Map;
  id: number;
  islocationAvalable: boolean = false;
  @Input() collectionPoint: CollectionPoint;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private collectionPointservice: CollectionPointservice,
    public authService: AuthService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  public latitude: number;
  public longitude: number;
  public zoom: number;
  ngOnInit() {

    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.collectionPoint = this.collectionPointservice.getCollectionPointById(this.id);
        if (this.collectionPoint === null || this.collectionPoint === undefined) {
          this.router.navigate(['../'], { relativeTo: this.route })
        }

        if (this.collectionPoint) {

          if (this.collectionPoint.latitude === 0 && this.collectionPoint.longitude === 0) {
            this.islocationAvalable = false;
          } else {
            this.islocationAvalable = true;
          }

          var mapProp = {
            center: new google.maps.LatLng(this.collectionPoint.latitude, this.collectionPoint.longitude),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var myLatLng = { lat: this.collectionPoint.latitude, lng: this.collectionPoint.longitude };

          this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

          //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
          var image = '../../../assets/img/bio_garbage_bag_map.png';

          var marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            animation: google.maps.Animation.DROP,
            title: this.collectionPoint.address,
            icon: image
          });

          /*
          this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
              types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
              this.ngZone.run(() => {
                //get the place result
                let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                //verify result
                if (place.geometry === undefined || place.geometry === null) {
                  return;
                }

                //set latitude, longitude and zoom
                this.latitude = place.geometry.location.lat();
                this.longitude = place.geometry.location.lng();
                this.zoom = 12;
              });
            });

          });

          */

        }
      }
    );
  }

  getIslocationAvalable() {
    return this.islocationAvalable;
  }

  ngAfterViewInit() {
    this.google_analytics = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  ngOnDestroy() {
    this.google_analytics.unsubscribe();
  }

  onEdit() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }

}
