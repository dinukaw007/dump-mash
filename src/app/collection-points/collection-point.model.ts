export class CollectionPoint {

    public collector: string;
    public contactDetails: string[];
    public address: string;
    public collectableMaterials: string[];
    public latitude : number;
    public longitude : number;   
     
    constructor(collector: string, contactDetails: string[], address: string, collectableMaterials: string[],latitude? : number ,longitude?: number) {
        this.collector = collector;
        this.contactDetails = contactDetails;
        this.address = address;
        this.collectableMaterials = collectableMaterials;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}