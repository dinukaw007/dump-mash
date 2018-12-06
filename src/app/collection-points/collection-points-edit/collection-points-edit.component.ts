import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CollectionPointservice } from './../collection-points.service';

@Component({
  selector: 'app-collection-points-edit',
  templateUrl: './collection-points-edit.component.html',
  styleUrls: ['./collection-points-edit.component.css']
})
export class CollectionPointsEditComponent implements OnInit {

  constructor(private route : ActivatedRoute,     
    private router : Router , private collectionPointservice : CollectionPointservice) { }

    id : number;
    editMode : boolean = false;
    collectionPointForm : FormGroup;

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params)=>{
         this.id = +param['id'];
         this.editMode =param['id'] != null; 
         this.intiForm();
         //console.log("Edit Mode "+ this.editMode);
      }
    );
  }

  onSubmit() {
  }

  onCancel() {
    this.router.navigate(['../'],{relativeTo:this.route});
  }


  getContactDetailsControls() {
    return (<FormArray>this.collectionPointForm.get('contactDetails')).controls;
  }

  getCollectableMaterialsControls() {
    return (<FormArray>this.collectionPointForm.get('collectableMaterials')).controls;
  }

  private intiForm() {  
    let collector  ='';   
    let address  ='';  
    let latitude  = 0;
    let longitude  = 0; 
    let imgPath  ='';
    let contactDetails  = new FormArray([]);
    let collectableMaterials = new FormArray([]);

    if(this.editMode){
      const collectionPoints = this.collectionPointservice.getCollectionPointById(this.id);
      collector = collectionPoints.collector;
      address= collectionPoints.address;
      latitude= collectionPoints.latitude;
      longitude= collectionPoints.longitude;
      imgPath= collectionPoints.imgPath;      
      if(collectionPoints['contactDetails']) {
        for(let contactDetail of collectionPoints.contactDetails){
          contactDetails.push(
            new FormGroup({
              'contact' : new FormControl(contactDetail, Validators.required),              
            })
          );
        }
      }
      if(collectionPoints['collectableMaterials']) {
        for(let collectableMaterial of collectionPoints.collectableMaterials){
          collectableMaterials.push(
            new FormGroup({
              'collectable-material' : new FormControl(collectableMaterial, Validators.required),              
            })
          );
        }
      }      
    }

    this.collectionPointForm = new FormGroup({
      'collector': new FormControl(collector, Validators.required),
      'address': new FormControl(address, Validators.required),
      'latitude': new FormControl(latitude),
      'longitude':new FormControl(longitude),
      'imgPath':new FormControl(imgPath),
      'contactDetails':contactDetails,
      'collectableMaterials':collectableMaterials
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
        'collectable-material': new FormControl(null, Validators.required)        
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