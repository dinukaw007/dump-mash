import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationFilter'
})
export class LocationFilterPipe implements PipeTransform {


  transform(value: any, args?: any): any {
    if(!args)
     return value;
    return value.filter(
      item => item.address.toLowerCase().indexOf(args.toLowerCase()) > -1
   )
  }
  // transform(value: any, filterString: string, ): any {
  //   if (value.length === 0 || filterString === '') {
  //     return value;
  //   }

  //   return value.filter(
  //     item => item.first_name.toLowerCase().indexOf(filterString.toLowerCase()) > -1
  //  );
  //   // const resultArray = [];
  //   // for (const item of value) {
  //   //   if (item['address'] === filterString) {
  //   //     resultArray.push(item);
  //   //   }
  //   // }
  //   // return resultArray;
  // }
}
