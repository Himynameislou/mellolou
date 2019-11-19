class Card {
  constructor(text) {
    this.text = text;
  }
}

class List {
  constructor(title) {
    this.title = title;
    this.cards = [];
  }

  addCard(text) {
    var card = new Card(text);
    this.cards.push(card);
  }
}

class Board {
  constructor() {
    this.lists = [];
  }

  addList(text) {
    var list = new List(text);
    this.lists.push(list);
  }
}
var card = new Card('My first card');
console.log(card);

console.log(card.constructor);
console.log(card.constructor.name);

var list = new List('My first list');
list.addCard('My first card');

console.log(list);