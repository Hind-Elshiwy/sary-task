import { Pipe, PipeTransform } from '@angular/core';
import { hero } from '../../@store/models/heroes.model';

@Pipe({
  name: 'heroesSearch',
})
export class HeroesSearchPipe implements PipeTransform {
  transform(heroes: hero[], searchKeyword: string) {
    if (!heroes) return [];
    if (!searchKeyword) return heroes;

    searchKeyword = searchKeyword.toLocaleLowerCase();
    return heroes.filter((hero) => {
      let { name, powers } = hero;
      let joinedValues = `${name} || ${powers}`;
      return joinedValues.toLocaleLowerCase().includes(searchKeyword);
    });

  }
}
