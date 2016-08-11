import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

/*
 Generated class for the DeckBrewService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class DeckBrewService {

    static get parameters() {
        return [[Http]];
    }

    constructor(private http:Http) {
        // this.data = null;
    }


    getCards() {
        var url = 'https://api.deckbrew.com/mtg/cards?set=emn';
        console.log('request MADE!!!');
             return this.http.get(url).map(res => res.json());

    }



}

