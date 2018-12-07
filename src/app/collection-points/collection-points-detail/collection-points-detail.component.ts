import { CollectionPointservice } from './../collection-points.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CollectionPoint } from '../collection-point.model';

@Component({
  selector: 'app-collection-points-detail',
  templateUrl: './collection-points-detail.component.html',
  styleUrls: ['./collection-points-detail.component.css']
})
export class CollectionPointsDetailComponent implements OnInit {
 
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  id:number;
  @Input() collectionPoint: CollectionPoint;
  constructor(private route : ActivatedRoute,private router : Router , private collectionPointservice : CollectionPointservice) { }

  ngOnInit() {   
    this.route.params.subscribe(
      (param : Params)=>{
        this.id = +param['id'];
        this.collectionPoint = this.collectionPointservice.getCollectionPointById(this.id);
        if(this.collectionPoint === null || this.collectionPoint === undefined){
                this.router.navigate(['../'],{relativeTo:this.route})
        }
        
        if(this.collectionPoint){
          var mapProp = {
            center: new google.maps.LatLng(this.collectionPoint.latitude, this.collectionPoint.longitude),
            zoom: 15,         
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var myLatLng = {lat: this.collectionPoint.latitude, lng: this.collectionPoint.longitude};  
          
          this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    
          var marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map ,
            title: 'Hello World!'
          });      
        }   
      }
    );
  }

  ngAfterViewInit(){
  }

  onEdit(){
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})
  }
  
}
