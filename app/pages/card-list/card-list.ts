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
    // cards:Array<any>;
    cards : any[];

    page:number;

    constructor(private navCtrl:NavController, private deckBrewService:DeckBrewService) {
        this.page = 0;

        //TODO: make this live template
        this.deckBrewService.getCards(this.page).subscribe(data => {
            console.log('111hello!');
            // this.cards = data;
            this.cards = data;

            // this.cards.push(data);
            console.log(this.cards);
        }, (err) => {
            console.log(err);
        });

    }


    doInfinite(infiniteScroll) {
        console.log('Begin async operation');

        setTimeout(() => {
            // for (var i = 0; i < 30; i++) {
            //     this.items.push( this.items.length );
            // }
            this.page++;

            this.deckBrewService.getCards(this.page).subscribe(data => {
                console.log('start suscribe');
                console.log(this.cards);
                console.log('logging data requested');
                console.log(data);
                if (data.length < 1) {
                    console.log('empty array, disable!');
                    //TODO: show toast
                    infiniteScroll.enable(false);
                } else {
                    console.log('pushing cards!');
                    // this.cards.pop();

                    console.log(this.cards.length);
                    this.cards = this.cards.concat(data);
                    console.log(data.length);
                    console.log(this.cards.length);
                    this.cards = this.cards.slice();
                    infiniteScroll.complete();

                }
            }, (err) => {
                console.log(err);
            });
            //
            // console.log('Async operation has ended');
            // infiniteScroll.complete();

        }, 500);
    }
}
