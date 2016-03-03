'use strict';

const Card = require('./card');
const CardsService = require('./cardFirebaseService');

//User stuff
class User {
  constructor() {
    this.id = null;
    this.cards = {};

    //initialize Firebase services
    this.cardsService = new CardsService();
  }

  login() {
    //initialize card list action callbacks
    this.cardsService.onCardAdd((card) => {
      this.cards[card.id] = card;
    });
  }

  addCard(card, callback = function() {}) {
    const newKey = this.cardsService.addCard(card, (error) => {
      if(error) {
        console.error('error adding card: ' + error)
        callback(error);
      } else {
        callback();
      }
    });
  }
}

module.exports = User;
