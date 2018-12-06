import { Injectable } from '@angular/core';
import { CollectionPoint } from './collection-point.model';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class CollectionPointservice {

    collectionPointChanged = new Subject<CollectionPoint[]>();

    private collectionPoints : CollectionPoint[] = [
        new CollectionPoint('PLAS Techs (Pvt) Ltd',['011 272 6736','077 732 5697'],'98/7 Hospital Road, Kalubowila, Dehiwala.',['All Recyclable Items'],6.865168,79.870375),
        new CollectionPoint('Eco First Recycle',['077 510 9959','077 202 9296'],'Gorakapitiya',['All Recyclable Items'],6.814507,79.948008),
        new CollectionPoint('Super Compost (pvt) Ltd',['011 289 4745','077 332 2712'],'143/3, Pitipana North, Homagama.',['All Recyclable Items'],6.847477,80.008793),
        new CollectionPoint('D. T. Enterprises',['075 291 5768'],'No. 36, Gangarama Rd, Werahara, Boralesgamuwa',['All Recyclable Items'],6.841970,79.899220),
        new CollectionPoint('Whiteline Industries Colombo (Pvt) Ltd',['011 244 7842','077 730 7482'],'169, New Moor Street, Colombo 12',['PP','HDP'],6.941156,79.865175),
        new CollectionPoint('EMP PVC Technology (Pvt) Ltd',['011 275 2777','071 407 3422'],'No.16, Templeburg Industrial Estate, Panagoda, Homagama',['PVC'],6.847477,80.008793),
    ];
    getCollectionPoints(){
        return this.collectionPoints.slice();
    }

    getCollectionPointById(index:number){        
        return this.collectionPoints[index];
    }
}