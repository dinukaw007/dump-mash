import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collectableMaterialFilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName : string): any {
    if(value.length ===0 || filterString===''){
      return value;
    }
    const resultArray = [];
    for(const item of value){   
      var collectable_materials = item[propName];
      for(const collectable_material of collectable_materials) {
        if(collectable_material['collectable_material']===filterString){
          resultArray.push(item)
        }  
      }        
    }
    return resultArray;
  }

}
