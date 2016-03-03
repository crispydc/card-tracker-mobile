'use strict';

const BASE_FIREBASE_URL = 'https://popping-fire-5373.firebaseio.com';

class BaseFirebaseService {
  constructRefURL(relURL : string) {
    if(relURL.startsWith('/')) {
      return BASE_FIREBASE_URL + relURL;
    } else {
      return BASE_FIREBASE_URL + '/' + relURL;
    }
  }
}

module.exports = BaseFirebaseService;
