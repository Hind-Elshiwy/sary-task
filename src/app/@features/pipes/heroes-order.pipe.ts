import { Pipe, PipeTransform } from '@angular/core';
import { hero } from '../../@store/models/heroes.model';

@Pipe({
  name: 'heroesOrder',
})
export class HeroesOrderPipe implements PipeTransform {
  transform(heroes: hero[], sort: string) {
    if (!heroes) return [];
    if (!sort) return heroes;
    return [...heroes].sort((a: any, b: any) => {
      return a[sort] < b[sort] ? -1 : 1;
    });
  }
}
