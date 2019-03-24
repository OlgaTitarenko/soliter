const RED_SUITS = ['♦', '♥'];

export default class Card{
  constructor ({element, card }) {
    this._element = element;
    this.card = card;
    this._render();
  }
  _render() {
      console.log(this.card);
      let className = 'card';
    //  if (!this.card.isOpen) {className +=' card--closed'}
      if (RED_SUITS.indexOf(this.card.suit) !== -1) {className += ' card--black'}

      this._element.innerHTML = ` <div class=${className} style="margin-top: 0px"><span>${this.card.sing+' '+this.card.suit}</span>></div>`;
  }
}
