import Card from './Card.js';

const RED_SUITS = ['♦', '♥'];

export default class Stack {
    constructor({element, cards}) {
        this._element = element;
        this.cards = cards;
        this.startVisible();

        this.render();

    }
    startVisible () {

        this.cards[this.cards.length-1].isOpen = true;
    }
    render() {

        let marginTop = 0;

            this._element.innerHTML =  `
            ${this.cards.map((card) =>{
                let className = 'card';
                if (!card.isOpen) {
                    className +=' card--closed';
                }
                if (RED_SUITS.indexOf(card.suit) !== -1) {
                    className += ' card--black';
                } else {
                    className += ' card--red';
                }
                const mT = marginTop;
                marginTop += 30;
                return `<div class="${className}" style="margin-top: ${mT}px;" data-card="${card.sing + card.suit}">${card.sing + ' ' + card.suit} </div>`;
            }).join('')} `



    }
}
