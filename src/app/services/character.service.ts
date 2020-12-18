import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character.model';
import { CharacterList } from '../models/characterList.model';

const apiURL = "https://api.genshin.dev/";

@Injectable()
export class CharacterService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<CharacterList>(apiURL+"characters/");
  }

  findByName(name: string) {
    return this.http.get<Character>(apiURL + "characters/" + name);
  }

  findPortrait(name: string) {
    return apiURL + "characters/" + name + "/portrait";
  }
}
