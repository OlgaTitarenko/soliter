const RED_SUITS = ['♦', '♥'];

export default class Base {
    constructor({element, cards}) {
        this._element = element;
        this.cards = cards;
        this.render();
    }

    render() {
        this._element.innerHTML =  `
            ${this.cards.map((card) => {
            let className = 'card';
            if (RED_SUITS.indexOf(card.suit) !== -1) {
                className += ' card--black';
            } else {
                className += ' card--red';
            }
            if (!card.isOpen) { className += '  card--closed'; }
            
            return `<div class="${className}" data-card="${card.sing + card.suit}">${card.sing + ' ' + card.suit} </div>`;
        }).join('')} `
    }
}