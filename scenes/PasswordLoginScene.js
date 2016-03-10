'use strict';

import React, {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
const SubmitButton = require('../components/SubmitButton.android');

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
          <TextInput style={styles.loginInput} keyboardType="email-address" placeholder="Email" onChangeText={(email) => this.setState({email})} />
          <TextInput style={styles.loginInput} secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setState({password})} />
          <SubmitButton label="Login" onPress={() => this.props.onLogin({email: this.state.email, password: this.state.password})} />
        </View>
      </View>
    );
  }
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
