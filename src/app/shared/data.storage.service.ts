import { Injectable } from '@angular/core';
import { CollectionPointservice } from './../collection-points/collection-points.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CollectionPoint } from '../collection-points/collection-point.model';
import { AuthService } from './../auth/auth.service';

@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient, private collectionPointservice: CollectionPointservice, private authService: AuthService) { }
    private provinceArray : string[] = [
        'Central',
        'Eastern',
        'North Central',
        'North Western',
        'Northern',
        'Sabaragamuwa',
        'Southern',
        'Uva',
        'Western'
    ]
    private firebaseBaseUrl : string = 'https://dumpmash-dbstore.firebaseio.com/';
    
    storeCollectionPoints() {
        const token = this.authService.getToken();
        return this.http.put(this.firebaseBaseUrl+'collection.json?auth='+token, this.collectionPointservice.getCollectionPoints());
    }

    getCollectionPoints() {
        //const token = this.authService.getToken();
        return this.http.get(this.firebaseBaseUrl+'collection.json')
            .pipe(map(
                (collectionPointResponse: CollectionPoint[]) => {
                    const collectionPoints: CollectionPoint[] = collectionPointResponse;
                    if(collectionPoints !== null){
                        for (let collectionPoint of collectionPoints) {
                            if (!collectionPoint['contactDetails']) {
                                collectionPoint['contactDetails'] = [];
                            }
                            if (!collectionPoint['collectableMaterials']) {
                                collectionPoint['collectableMaterials'] = [];
                            }
                        }
                    }else{
                        console.log("Something went wrong");
                    }                   
                    return collectionPoints;
                }
            ))
            .subscribe(
                (collectionPoints: CollectionPoint[]) => {
                    if(collectionPoints !== null){
                        this.collectionPointservice.setCollectionPoints(collectionPoints);
                    }else{
                        console.log("Something went wrong");
                    }
                    
                }
            );
    }

    getProvince(){
        return this.provinceArray.slice();
    }


}