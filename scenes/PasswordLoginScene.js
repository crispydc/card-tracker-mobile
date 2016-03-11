'use strict';

import React, {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native';
const SubmitButton = require('../components/SubmitButton.android');
const AuthFirebaseService = require('../data/authFirebaseService');

var LoginScene = React.createClass({
  getInitialState() {
    return {
      email: '',
      password: ''
    }
  },

  render() {
    return (
      <View style={styles.loginContainer}>
        <Text>Welcome to the app! Please login.</Text>
        <View style={styles.inputsContainer}>
          <TextInput style={styles.loginInput} value={this.state.email} keyboardType="email-address" placeholder="Email"
            onChangeText={(email) => this.setState({email})} ref={(textinput) => this.beginInput = textinput}/>
          <TextInput style={styles.loginInput} value={this.state.password} secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setState({password})} />
          <SubmitButton label="Login" onPress={this.onLoginButtonPress} />
        </View>
      </View>
    );
  },

  onLoginButtonPress() {
    //get credentials
    const credentials = {
      email: this.state.email,
      password: this.state.password
    };

    //firebase Login
    const authService = new AuthFirebaseService();
    authService.authWithPassword(credentials).then((authData) => {

      //notify the main component
      this.props.onLogin(authData);

    }).catch((error) => {
      console.log('failed login: ', error);

      //the login failed - show dialog
      Alert.alert(
        'Login Failed',
        'The email or password is incorrect. Please check and try again.',
        [
          {text: 'Got It'}
        ]
      );

      //reset fields
      this.setState({
        email: '',
        password: ''
      });

      //reset the focus
      this.beginInput.focus();
    });
  },
});

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginInput: {
    width: 200
  },
  inputsContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});

module.exports = LoginScene;
