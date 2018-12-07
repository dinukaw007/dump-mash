import { Injectable } from '@angular/core';
import { CollectionPointservice } from './../collection-points/collection-points.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CollectionPoint } from '../collection-points/collection-point.model';


@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient, private collectionPointservice: CollectionPointservice) { }

    storeCollectionPoints() {
        return this.http.put('https://[your-app-name].firebaseio.com/collection.json', this.collectionPointservice.getCollectionPoints());
    }

    getCollectionPoints() {
        return this.http.get('https://[your-app-name].firebaseio.com/collection.json')
            .pipe(map(
                (collectionPointResponse: CollectionPoint[]) => {
                    const collectionPoints: CollectionPoint[] = collectionPointResponse;
                    for (let collectionPoint of collectionPoints) {
                        if (!collectionPoint['contactDetails']) {
                            collectionPoint['contactDetails'] = [];
                        }
                        if (!collectionPoint['collectableMaterials']) {
                            collectionPoint['collectableMaterials'] = [];
                        }
                    }
                    return collectionPoints;
                }
            ))
            .subscribe(
                (collectionPoints: CollectionPoint[]) => {
                    this.collectionPointservice.setCollectionPoints(collectionPoints);
                }
            );
    }


}