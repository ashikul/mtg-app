import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Rx";

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


    getCards(page) {
        var url = `https://api.deckbrew.com/mtg/cards?set=emn&page=${page}`;
        console.log('request MADE!!!');
             return this.http.get(url).map(res => res.json());

    }

    public getCards2(page: number): Observable<any> {
        return this.http.get(`https://api.deckbrew.com/mtg/cards?set=emn&page=${page}`)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    // getCards(page) {
    //     page
    //     var url = 'https://api.deckbrew.com/mtg/cards?set=emn';
    //     console.log('request MADE!!!');
    //     return this.http.get(url).map(res => res.json());
    //
    // }



}

