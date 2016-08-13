import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {DeckBrewService} from "../../providers/deck-brew-service/deck-brew-service";

/*
 Generated class for the CardListPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/card-list/card-list.html',
    providers: [DeckBrewService]
})
export class CardListPage {
    cards:Array<any>;

    constructor(private navCtrl:NavController, private deckBrewService:DeckBrewService) {

        // this.deckBrewService.getCardsSetEMN();

        this.deckBrewService.getCards().subscribe(data => {
            console.log('111hello!');
            this.cards = data;
            console.log(this.cards);
        }, (err) => {
            console.log(err);
        });

        
        // this.deckBrewService.getCards().then( res => {
        //     console.log('hello!');
        //     this.cards = res;
        //     console.log(res);
        //
        //
        //     }
        // );
        //      console.log('hello!3333');
        //  }
        //

    }

    doInfinite(infiniteScroll) {
        console.log('Begin async operation');

        setTimeout(() => {
            // for (var i = 0; i < 30; i++) {
            //     this.items.push( this.items.length );
            // }

            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    }
}
