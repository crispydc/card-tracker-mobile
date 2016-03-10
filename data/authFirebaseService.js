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
    this.authRef.authWithOAuthToken("google", user.idToken, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        callback(authData);
      }
    });
  }

  authWithPassword(credentials, callback) {
    console.log('attempting user/pass Firebase login... ', credentials);
    this.authRef.authWithPassword(credentials, (error, authData) => {
        if(error) {
          console.log('Login error: ', error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          callback(authData);
        }
    });
  }

  logout() {
    this.authRef.unauth();
  }
}

module.exports = AuthFirebaseService;
