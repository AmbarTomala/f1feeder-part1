import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
     // searchText = searchText.toString().toLowerCase();
     let nuevalista = items.filter( it => it.Driver.givenName.toLowerCase().includes(searchText.toLowerCase()) || it.Driver.familyName.toLowerCase().includes(searchText.toLowerCase()));
      return nuevalista
   }
}

