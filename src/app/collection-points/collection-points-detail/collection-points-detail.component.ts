import { CollectionPointservice } from './../collection-points.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CollectionPoint } from '../collection-point.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-collection-points-detail',
  templateUrl: './collection-points-detail.component.html',
  styleUrls: ['./collection-points-detail.component.css']
})
export class CollectionPointsDetailComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  id: number;
  islocationAvalable: boolean = false;
  @Input() collectionPoint: CollectionPoint;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private collectionPointservice: CollectionPointservice,
    public authService: AuthService) { }

  ngOnInit() {
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


        }
      }
    );
  }

  getIslocationAvalable() {
    return this.islocationAvalable;
  }

  ngAfterViewInit() {
  }

  onEdit() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }

}
