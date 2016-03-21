'use strict';

const Firebase = require('firebase');
const BaseFirebaseService = require('./baseFirebaseService');

class AuthFirebaseService extends BaseFirebaseService {
  constructor() {
    super();
    this.authRef = new Firebase(super.getBaseRefURL());
  }

  authUserWithGoogle(user, callback) {
    console.log('attempting Firebase login...', user.idToken);
    this.authRef.authWithOAuthToken('google', user.idToken, function(error, authData) {
      if (error) {
        console.log('Login Failed!', error);
      } else {
        console.log('Authenticated successfully with payload:', authData);
        callback(authData);
      }
    });
  }

  authWithPassword(credentials) {
    console.log('attempting user/pass Firebase login... ', credentials);

    return this.authRef.authWithPassword(credentials).then((authData) => {
      console.log('Authenticated successfully with payload:', authData);
      return authData;
    }).catch((error) => {
      console.log('Login error: ', error);
      return Promise.reject(error);
    });
  }

  authWithToken(token) {
    if(token) {
      console.log('attempting token Firebase login... ', token);

      return this.authRef.authWithCustomToken(token).then((authData) => {
        console.log('Authenticated successfully with payload:', authData);
        return authData;
      }).catch((error) => {
        console.log('Login error: ', error);
        return Promise.reject(error);
      });

    } else {
      return null;
    }
  }

  logout() {
    this.authRef.unauth();
  }
}

module.exports = AuthFirebaseService;
