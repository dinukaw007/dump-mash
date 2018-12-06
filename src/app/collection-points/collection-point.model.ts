export class CollectionPoint {

    public collector: string;
    public contactDetails: CntactDetail[];
    public address: string;
    public collectableMaterials: CollectableMaterials[];
    public latitude : number;
    public longitude : number;   
    public imgPath : string;   
     
    constructor(collector: string, contactDetails: CntactDetail[], address: string, collectableMaterials: CollectableMaterials[],latitude? : number ,longitude?: number,imgPath?: string) {
        this.collector = collector;
        this.contactDetails = contactDetails;
        this.address = address;
        this.collectableMaterials = collectableMaterials;
        this.latitude = latitude;
        this.longitude = longitude;
        this.imgPath = imgPath;
    }
}

export class CntactDetail {   
    public  contact: string;   
    constructor(contact: string){
        this.contact = contact;
    }
}

export class CollectableMaterials {
    public  collectable_material: string;  
    constructor(collectable_material: string){
        this.collectable_material = collectable_material;
    } 
}