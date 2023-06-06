import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: number, singular: string, plural: string): string {
    var phrase: string ="";
    if(value > 1) {
      var nb: string = value.toLocaleString("en-US");
      phrase = nb + " " + plural;
      return phrase;
    } else {
      var nb: string = value.toLocaleString("en-US");
      phrase = nb + " " + singular;
      return phrase;
    }
  }

}
