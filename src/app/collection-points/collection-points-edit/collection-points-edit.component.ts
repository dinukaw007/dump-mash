import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-collection-points-edit',
  templateUrl: './collection-points-edit.component.html',
  styleUrls: ['./collection-points-edit.component.css']
})
export class CollectionPointsEditComponent implements OnInit {
  id : number;
  editMode : boolean = false;
  collectionPointForm : FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  }

  onCancel() {
  }
  
}
