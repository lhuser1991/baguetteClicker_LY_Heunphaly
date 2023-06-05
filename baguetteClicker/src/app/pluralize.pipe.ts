import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: number, singular: string, plural: string): string {
    var phrase: string ="";
    if(value > 1) {
      phrase = value + " " + plural;
      return phrase;
    } else {
      phrase = value + " " + singular;
      return phrase;
    }
  }

}
