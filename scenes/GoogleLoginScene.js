'use strict';

import React, {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton
} from 'react-native-google-signin';

var LoginScene = React.createClass({

  render() {
    return (
      <View style={styles.loginContainer}>
        <Text>Welcome to the app! Please login.</Text>
        <GoogleSigninButton
          style={{width: 230, height: 48}}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Light}
          onPress={this.onSignIn}/>
      </View>
    );
  },

  onSignIn() {
    const onLoginCallback = this.props.onLogin;
    GoogleSignin.signIn()
      .then((user) => {
        console.log('processing login: ', user);
        onLoginCallback(user);
      })
      .catch((err) => {
        console.log('WRONG SIGNIN:', err);
      })
      .done();
    }
});

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

module.exports = LoginScene;
