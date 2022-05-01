import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice'   , score: 20 },
      { id: 12, name: 'Narco'     , score: 19 },
      { id: 13, name: 'Bombasto'  , score: 14 },
      { id: 14, name: 'Celeritas' , score: 6 },
      { id: 15, name: 'Magneta'   , score: 1 },
      { id: 16, name: 'RubberMan' , score: 7 },
      { id: 17, name: 'Dynama'    , score: 16 },
      { id: 18, name: 'Dr IQ'     , score: 18 },
      { id: 19, name: 'Magma'     , score: 13 },
      { id: 20, name: 'Tornado'   , score: 8 }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
