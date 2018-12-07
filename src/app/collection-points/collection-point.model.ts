export class CollectionPoint {

    public collector: string;
    public contactDetails: CntactDetail[];
    public address: string;
    public city: string;
    public province: string;
    public collectableMaterials: CollectableMaterials[];
    public latitude : number;
    public longitude : number;   
    public imgPath : string;   
     
    constructor(collector: string, contactDetails: CntactDetail[], address: string, collectableMaterials: CollectableMaterials[],latitude? : number ,longitude?: number,imgPath?: string,city?: string,province?: string) {
        this.collector = collector;
        this.contactDetails = contactDetails;
        this.address = address;
        this.city = city;
        this.province = province;
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