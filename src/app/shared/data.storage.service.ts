import { Injectable } from '@angular/core';
import { CollectionPointservice } from './../collection-points/collection-points.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CollectionPoint } from '../collection-points/collection-point.model';
import { AuthService } from './../auth/auth.service';

@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient, private collectionPointservice: CollectionPointservice, private authService: AuthService) { }

    storeCollectionPoints() {
        const token = this.authService.getToken();
        return this.http.put('https://udemy-ng-http-7f499.firebaseio.com/collection.json?auth='+token, this.collectionPointservice.getCollectionPoints());
    }

    getCollectionPoints() {
        //const token = this.authService.getToken();
        return this.http.get('https://udemy-ng-http-7f499.firebaseio.com/collection.json')
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