'use strict';

const Firebase = require('firebase');
const BaseFirebaseService = require('./baseFirebaseService');
const Card = require('./card');

class CardFirebaseService extends BaseFirebaseService {
  constructor() {
    super();
    this.cardsRef = new Firebase(super.constructRefURL('/cards'));
  }

  addCard(card, callback = function() {}) {
    this.cardsRef.push(card.getJSONData(), callback);
  }

  saveCard(card) {
    this.cardsRef.child(card.id).update(card.getJSONData());
  }

  onCardAdd(callback) {
    this.cardsRef.on('child_added', (snapshot) => {
      const cardDetails = snapshot.val();
      const newCard = new Card(snapshot.key(), cardDetails);
      callback(newCard);
    });
  }
}

module.exports = CardFirebaseService;
