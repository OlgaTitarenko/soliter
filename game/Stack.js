import Card from './Card.js';

export default class Stack {
    constructor({element}) {
        this._element = element;
        this.render();

    }
    render() {
        this._element.innerHTML =  `
                <div class="card card--red card--closed" style="margin-top: 0px;">6 ♦</div>
                <div class="card card--black" style="margin-top: 30px;">9 ♣</div>
            `;
    }
}

