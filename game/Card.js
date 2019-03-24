const RED_SUITS = ['♦', '♥'];

export default class Card{
  constructor ({element, card }) {
    this._element = element;
    this.card = card;
    this._render();
  }
  _render() {
      let className = 'card';
      if (!this.card.isOpen) {
          className +=' card--closed';
      }
      if (RED_SUITS.indexOf(this.card.suit) !== -1) {
          className += ' card--black';
      } else {
          className += ' card--red';
      }

      this._element.innerHTML = ` <div class=${className} style="margin-top: 0">${this.card.sing + ' ' + this.card.suit}</div>`;
  }
}
