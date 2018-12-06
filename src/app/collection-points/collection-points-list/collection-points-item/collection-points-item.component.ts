import { Component, OnInit, Input } from '@angular/core';
import { CollectionPoint } from '../../collection-point.model';

@Component({
  selector: 'app-collection-points-item',
  templateUrl: './collection-points-item.component.html',
  styleUrls: ['./collection-points-item.component.css']
})
export class CollectionPointsItemComponent implements OnInit {

  @Input() collectionPoint: CollectionPoint;
  @Input() index :number;
  
  constructor() { }

  ngOnInit() {
  }

}
