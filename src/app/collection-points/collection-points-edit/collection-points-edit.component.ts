import { DataStorageService } from './../../shared/data.storage.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { CollectionPointservice } from './../collection-points.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-collection-points-edit',
  templateUrl: './collection-points-edit.component.html',
  styleUrls: ['./collection-points-edit.component.css']
})
export class CollectionPointsEditComponent implements OnInit, OnDestroy, AfterViewInit {
  google_analytics: Subscription;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private collectionPointservice: CollectionPointservice,
    private dataStorageService: DataStorageService,
    public authService: AuthService) {

  }

  id: string;
  editMode: boolean = false;
  collectionPointForm: FormGroup;
  provienceArray: string[] = [];
  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.id = param['id'];
        this.editMode = param['id'] != null;
        this.provienceArray = this.dataStorageService.getProvince();
        this.intiForm();
        //console.log("Edit Mode "+ this.editMode);
      }
    );
  }

  ngOnDestroy() {
    this.google_analytics.unsubscribe();
  }

  ngAfterViewInit() {
    this.google_analytics = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.collectionPointservice.updateCollectionPoints(this.id, this.collectionPointForm.value);
      this.dataStorageService.storeCollectionPoints().subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    } else {
      this.collectionPointservice.addCollectionPoint(this.collectionPointForm.value);
      this.dataStorageService.storeCollectionPoints().subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getContactDetailsControls() {
    var data = (<FormArray>this.collectionPointForm.get('contactDetails')).controls;
    return data;
  }

  getCollectableMaterialsControls() {
    var data = (<FormArray>this.collectionPointForm.get('collectableMaterials')).controls;
    return data;
  }

  private intiForm() {
    let id =  Guid.create().toString();
    let collector = '';
    let address = '';
    let city = '';
    let province = '';
    let latitude = 0;
    let longitude = 0;
    let imgPath = '../../../../assets/img/Environmental-awareness.png';
    let contactDetails = new FormArray([]);
    let collectableMaterials = new FormArray([]);

    if (this.editMode) {
      const collectionPoints = this.collectionPointservice.getCollectionPointById(this.id);

      if (collectionPoints === null || collectionPoints === undefined) {
        this.router.navigate(['../'], { relativeTo: this.route });

      } else {
        collector = collectionPoints.collector;
        address = collectionPoints.address;
        city = collectionPoints.city;
        province = collectionPoints.province;
        latitude = collectionPoints.latitude;
        longitude = collectionPoints.longitude;
        imgPath = collectionPoints.imgPath;
        id = collectionPoints.id;
        if (collectionPoints['contactDetails']) {
          for (let contactDetail of collectionPoints.contactDetails) {
            contactDetails.push(
              new FormGroup({
                'contact': new FormControl(contactDetail.contact, Validators.required),
              })
            );
          }
        }
        if (collectionPoints['collectableMaterials']) {
          for (let collectableMaterial of collectionPoints.collectableMaterials) {
            collectableMaterials.push(
              new FormGroup({
                'collectable_material': new FormControl(collectableMaterial.collectable_material, Validators.required),
              })
            );
          }
        }
      }

    }

    this.collectionPointForm = new FormGroup({
      'collector': new FormControl(collector, Validators.required),
      'address': new FormControl(address, Validators.required),
      'city': new FormControl(city, Validators.required),
      'province': new FormControl(province, Validators.required),
      'latitude': new FormControl(latitude),
      'longitude': new FormControl(longitude),
      'imgPath': new FormControl(imgPath),
      'contactDetails': contactDetails,
      'collectableMaterials': collectableMaterials,
      'id': new FormControl(id),
    });
  }

  onAddContactDetails() {
    (<FormArray>this.collectionPointForm.get('contactDetails')).push(
      new FormGroup({
        'contact': new FormControl(null, Validators.required)
      })
    );
  }

  onAddCollectableMaterials() {
    (<FormArray>this.collectionPointForm.get('collectableMaterials')).push(
      new FormGroup({
        'collectable_material': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteContactDetails(index: number) {
    (<FormArray>this.collectionPointForm.get('contactDetails')).removeAt(index);
  }

  onDeleteCollectableMaterials(index: number) {
    (<FormArray>this.collectionPointForm.get('collectableMaterials')).removeAt(index);
  }
}
