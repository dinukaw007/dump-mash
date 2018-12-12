
import { Injectable } from '@angular/core';
import { CollectionPoint, CntactDetail, CollectableMaterials } from './collection-point.model';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class CollectionPointservice {

    collectionPointChanged = new Subject<CollectionPoint[]>();
    private collectionPoints: CollectionPoint[] = [];

    /*
    private collectionPoints: CollectionPoint[] = [
        new CollectionPoint('PLAS Techs (Pvt) Ltd', [new CntactDetail('011 272 6736'), new CntactDetail('077 732 5697')], '98/7 Hospital Road, Kalubowila, Dehiwala.', [new CollectableMaterials('All Recyclable Items')], 6.865168, 79.870375, '../../../../assets/img/Environmental-awareness.png'),
        new CollectionPoint('Eco First Recycle', [new CntactDetail('077 510 9959'), new CntactDetail('077 202 9296')], 'Gorakapitiya', [new CollectableMaterials('All Recyclable Items')], 6.814507, 79.948008, '../../../../assets/img/Environmental-awareness.png'),
        new CollectionPoint('Super Compost (pvt) Ltd', [new CntactDetail('011 289 4745'), new CntactDetail('077 332 2712')], '143/3, Pitipana North, Homagama.', [new CollectableMaterials('All Recyclable Items')], 6.847477, 80.008793, '../../../../assets/img/Environmental-awareness.png'),
        new CollectionPoint('D. T. Enterprises', [new CntactDetail('075 291 5768')], 'No. 36, Gangarama Rd, Werahara, Boralesgamuwa', [new CollectableMaterials('All Recyclable Items')], 6.841970, 79.899220, '../../../../assets/img/Environmental-awareness.png'),
        new CollectionPoint('Whiteline Industries Colombo (Pvt) Ltd', [new CntactDetail('011 244 7842'), new CntactDetail('077 730 7482')], '169, New Moor Street, Colombo 12', [new CollectableMaterials('PP'), new CollectableMaterials('HDP')], 6.941156, 79.865175, '../../../../assets/img/Environmental-awareness.png'),
        new CollectionPoint('EMP PVC Technology (Pvt) Ltd', [new CntactDetail('011 275 2777'), new CntactDetail('071 407 3422')], 'No.16, Templeburg Industrial Estate, Panagoda, Homagama', [new CollectableMaterials('PVC')], 6.847477, 80.008793, '../../../../assets/img/Environmental-awareness.png'),
    ];*/
    
    setCollectionPoints(collectionPoints: CollectionPoint[]) {
        this.collectionPoints = collectionPoints;
        this.collectionPointChanged.next(this.collectionPoints.slice());
    }

    addCollectionPoint(collectionPoint: CollectionPoint) {
        this.collectionPoints.push(collectionPoint);
        this.collectionPointChanged.next(this.collectionPoints.slice());
    }

    getCollectionPoints() {
        let data =  this.collectionPoints.slice();
        return data;
    }

    getCollectionPointByIndex(index: number) {
        return this.collectionPoints[index];
    }
    getCollectionPointById(id: string) {
        return this.collectionPoints.find(x=>x.id ===id);
    }

    updateCollectionPoints(id: string, newCollectionPoint: CollectionPoint) {
        //let collectionPoint=  this.collectionPoints.find(x=>x.id ===id);
        var foundIndex = this.collectionPoints.findIndex(x => x.id == id);
        this.collectionPoints[foundIndex] = newCollectionPoint;        
        this.collectionPointChanged.next(this.collectionPoints.slice());
    }

    deleteCollectionPoints(index: number) {
        this.collectionPoints.splice(index, 1);
        this.collectionPointChanged.next(this.collectionPoints.slice());
    }
}