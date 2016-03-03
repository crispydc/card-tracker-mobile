'use strict';

class Card {
  constructor(id = null, cardDetails = {}) {
    this.id = id;
    this.name = cardDetails.name;
    this.last4 = cardDetails.last4;
    this.type = cardDetails.type;
  }

  getJSONData() {
    return {
      name: this.name,
      last4: this.last4,
      type: this.type
    };
  }
}

module.exports = Card;
