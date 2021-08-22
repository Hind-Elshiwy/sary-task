import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  host = `${window.location.protocol}//${window.location.host}`;
  constructor(private httpClient: HttpClient) { }

  public getHerosAction() {
    return this.httpClient.get<any>(this.host + '/assets/api/heroes.json');
  }


}
