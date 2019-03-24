import Stack from './Stack.js';
import Card from './Card.js';

const SUITS = ['♠', '♣', '♦', '♥'];

const AVAILABLE_SIGNS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export default class Game {
    constructor({ element }) {
        this._element = element;
        this.state = {
            deck: []
        };
        this.render();
        this.createDeck();
        this.randomDeck();

        this._stack = new Stack({
            element : document.querySelector('[data-stack="num_2"]')
        });

        this._card = new Card({
            element : document.querySelector('[data-stack="num_1"]'),
            card : this.state.deck[0]
        });



    }

    createDeck() {
        for (let i = 0; i<SUITS.length; i++) {
            for (let j = 0; j<AVAILABLE_SIGNS.length; j++) {
                let card = {
                    suit: SUITS[i],
                    sing: AVAILABLE_SIGNS[j],
                    isOpen:false
                };
                this.state.deck.push(card);
            }
        }
    }

    randomDeck() {
        for (let i = 0; i < this.state.deck.length; i++) {
            const rnIndex = Math.floor(Math.random() * this.state.deck.length);
            const temp = this.state.deck[rnIndex];
            this.state.deck[rnIndex] = this.state.deck[i];
            this.state.deck[i] = temp;
        }
    }

    render() {
        this._element.innerHTML =  `
     <div class="deck__main">
            <div data-stack="base" class="placeholder">
                <div class="card card--black card--closed">Q ♠</div>
                <div class="card card--black card--closed">K ♠</div>
                <div class="card card--red card--closed">Q ♦</div>
                <div class="card card--black card--closed">A ♠</div>
                <div class="card card--red card--closed">5 ♦</div>
                <div class="card card--red card--closed">3 ♥</div>
                <div class="card card--black card--closed">8 ♣</div>
                <div class="card card--red card--closed">3 ♦</div>
                <div class="card card--red card--closed">9 ♦</div>
                <div class="card card--black card--closed">7 ♠</div>
                <div class="card card--red card--closed">K ♦</div>
                <div class="card card--red card--closed">7 ♦</div>
                <div class="card card--black card--closed">5 ♠</div>
                <div class="card card--red card--closed">4 ♥</div>
                <div class="card card--black card--closed">Q ♣</div>
                <div class="card card--black card--closed">6 ♣</div>
                <div class="card card--black card--closed">4 ♠</div>
                <div class="card card--red card--closed">7 ♥</div>
                <div class="card card--black card--closed">8 ♠</div>
                <div class="card card--black card--closed">6 ♠</div>
                <div class="card card--black card--closed">10 ♣</div>
                <div class="card card--black card--closed">4 ♣</div>
                <div class="card card--red card--closed">2 ♦</div>
                <div class="card card--red card--closed">5 ♥</div>
            </div>
            <div data-stack="baseR" class="placeholder"></div>
        </div>        
        <div class="deck__final">
            <div data-stack="final_1" class="placeholder"></div>
            <div data-stack="final_2" class="placeholder"></div>
            <div data-stack="final_3" class="placeholder"></div>
            <div data-stack="final_4" class="placeholder"></div>
        </div>
        <div class="decks__workflow">
            <div data-stack="num_1" class="placeholder">
              
            </div>
            <div data-stack="num_2" class="placeholder"></div>
            <div data-stack="num_3" class="placeholder">
                <div class="card card--black card--closed" style="margin-top: 0;">2 ♣</div>
                <div class="card card--black card--closed" style="margin-top: 30px;">9 ♠</div>
                <div class="card card--red" style="margin-top: 60px;">8 ♥</div>
            </div>
            <div data-stack="num_4" class="placeholder">
                <div class="card card--black card--closed" style="margin-top: 0px;">3 ♠</div>
                <div class="card card--red card--closed" style="margin-top: 30px;">Q ♥</div>
                <div class="card card--black card--closed" style="margin-top: 60px;">A ♣</div>
                <div class="card card--red" style="margin-top: 90px;">9 ♥</div>
            </div>
            <div data-stack="num_5" class="placeholder">
                <div class="card card--red card--closed" style="margin-top: 0px;">J ♥</div>
                <div class="card card--red card--closed" style="margin-top: 30px;">A ♥</div>
                <div class="card card--black card--closed" style="margin-top: 60px;">J ♣</div>
                <div class="card card--red card--closed" style="margin-top: 90px;">4 ♦</div>
                <div class="card card--black" style="margin-top: 120px;">3 ♣</div>
            </div>
            <div data-stack="num_6" class="placeholder">
                <div class="card card--black card--closed" style="margin-top: 0px;">5 ♣</div>
                <div class="card card--red card--closed" style="margin-top: 30px;">2 ♥</div>
                <div class="card card--red card--closed" style="margin-top: 60px;">A ♦</div>
                <div class="card card--red card--closed" style="margin-top: 90px;">10 ♦</div>
                <div class="card card--red card--closed" style="margin-top: 120px;">8 ♦</div>
                <div class="card card--red" style="margin-top: 150px;">10 ♥</div>
            </div>
            <div data-stack="num_7" class="placeholder">
                <div class="card card--black card--closed" style="margin-top: 0px;">2 ♠</div>
                <div class="card card--red card--closed" style="margin-top: 30px;">J ♦</div>
                <div class="card card--black card--closed" style="margin-top: 60px;">7 ♣</div>
                <div class="card card--black card--closed" style="margin-top: 90px;">10 ♠</div>
                <div class="card card--red card--closed" style="margin-top: 120px;">K ♥</div>
                <div class="card card--black card--closed" style="margin-top: 150px;">K ♣</div>
                <div class="card card--red" style="margin-top: 180px;">6 ♥</div>
            </div>
        </div>
        <div class="winner">YOU WIN!</div>
     `;
    }
}

