import Stack from './Stack.js';
import Base from './Base.js'

const SUITS = ['♠', '♣', '♦', '♥'];

const AVAILABLE_SIGNS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export default class Game {
    constructor({ element }) {
        this._element = element;
        this.state = {
            deck: [],
            base: [],
            baseR: [],
            final_1 : [],
            final_2 : [],
            final_3 : [],
            final_4 : [],
            stack_1: [],
            stack_2: [],
            stack_3: [],
            stack_4: [],
            stack_5: [],
            stack_6: [],
            stack_7: []
        };
        this.render();
        this.createDeck();
        this.randomDeck();
        this.distribution();

        this._stack1 = new Stack({
            element : this._element.querySelector('[data-stack="num_1"]'),
            cards : this.state.stack_1
        });
        this._stack2 = new Stack({
            element : this._element.querySelector('[data-stack="num_2"]'),
            cards : this.state.stack_2
        });
        this._stack3 = new Stack({
            element : this._element.querySelector('[data-stack="num_3"]'),
            cards : this.state.stack_3
        });
        this._stack4 = new Stack({
            element : this._element.querySelector('[data-stack="num_4"]'),
            cards : this.state.stack_4
        });
        this._stack5 = new Stack({
            element : this._element.querySelector('[data-stack="num_5"]'),
            cards : this.state.stack_5
        });
        this._stack6 = new Stack({
            element : this._element.querySelector('[data-stack="num_6"]'),
            cards : this.state.stack_6
        });
        this._stack7 = new Stack({
            element : this._element.querySelector('[data-stack="num_7"]'),
            cards : this.state.stack_7
        });
        this._base = new Base({
            element: this._element.querySelector('[data-stack="base"]'),
            cards: this.state.base
        });
        this._baseR = new Base({
            element : this._element.querySelector('[data-stack="baseR"]'),
            cards : this.state.baseR
        });
        this._final_1 = new Base({
            element: this._element.querySelector('[data-stack="final_1"]'),
            cards: this.state.final_1
        });
        this._final_2 = new Base({
            element: this._element.querySelector('[data-stack="final_2"]'),
            cards: this.state.final_2
        });
        this._final_3 = new Base({
            element: this._element.querySelector('[data-stack="final_3"]'),
            cards: this.state.final_3
        });
        this._final_4 = new Base({
            element: this._element.querySelector('[data-stack="final_4"]'),
            cards: this.state.final_4
        });

        this._element.addEventListener('click', (event) => {
            const card = event.target.closest('.card');

            if (!card) {
                return;
            }
            console.log(card.dataset.card);
            this.onOpenBaseCard(card.dataset.card);
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

    distribution() {
        this.state.stack_1 = [this.state.deck[0]];
        this.state.stack_2 = [this.state.deck[1] , this.state.deck[2]];
        this.state.stack_3 = this.state.deck.slice(3,6);
        this.state.stack_4 = this.state.deck.slice(6,10);
        this.state.stack_5 = this.state.deck.slice(10,15);
        this.state.stack_6 = this.state.deck.slice(15,21);
        this.state.stack_7 = this.state.deck.slice(21,28);
        this.state.base = this.state.deck.slice(28);
    }

    onOpenBaseCard(data){
        const sing = data[0];
        const suit = data[1];
        let position = null;
        for (let i = 0; i < this.state.base.length; i++) {
            let card = this.state.base[i];
            if (card.suit === suit && card.sing === sing) {
                card.isOpen = true;
                position = i;
            }
        }
        const card = this.state.base.splice(position,1);

        this.state.baseR.push(card[0]);
        this._baseR.render();
        this._base.render();
    }
    render() {
        this._element.innerHTML =  `
        <div class="deck__main">
            <div data-stack="base" class="placeholder"></div>
            <div data-stack="baseR" class="placeholder"></div>
        </div>        
        <div class="deck__final">
            <div data-stack="final_1" class="placeholder"></div>
            <div data-stack="final_2" class="placeholder"></div>
            <div data-stack="final_3" class="placeholder"></div>
            <div data-stack="final_4" class="placeholder"></div>
        </div>
        <div class="decks__workflow">
            <div data-stack="num_1" class="placeholder"></div>
            <div data-stack="num_2" class="placeholder"></div>
            <div data-stack="num_3" class="placeholder"></div>
            <div data-stack="num_4" class="placeholder"></div>
            <div data-stack="num_5" class="placeholder"></div>
            <div data-stack="num_6" class="placeholder"></div>
            <div data-stack="num_7" class="placeholder"></div>
        </div>
        <div class="winner">YOU WIN!</div>
     `;
    }
}

