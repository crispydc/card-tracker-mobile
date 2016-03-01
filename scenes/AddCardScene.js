'use strict';

import React, {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  ToolbarAndroid,
  TextInput,
  Picker
} from 'react-native';
var LoadingIndicator = require('../components/LoadingIndicator.android');

var AddCardScene = React.createClass({
  getInitialState() {
      return {
        name: '',
        type: 'visa',
        last4: ''
      }
  },

  render() {
    return (
      <View style={{flex:1}}>
        <ToolbarAndroid
          navIcon={require('image!ic_close_white_24dp')}
          onIconClicked={this.onBackPress}
          title="Add Card"
          titleColor="#FFFFFF"
          style={styles.toolbar}
        />
        <View style={styles.mainContainer}>
          <View style={styles.formRow}>
            <Text style={styles.labelText}>Card Name</Text>
            <TextInput style={{flex:1}} onChangeText={(name) => this.setState({name})} />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.labelText}>Card Type</Text>
            <Picker
              style={{width: 150}}
              selectedValue={this.state.type}
              onValueChange={(type) => this.setState({type})}>
              <Picker.Item label="Visa" value="visa" />
              <Picker.Item label="Mastercard" value="mc" />
              <Picker.Item label="Amex" value="amex" />
              <Picker.Item label="Discover" value="discover" />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.labelText}>Last 4</Text>
            <TextInput style={{width: 150}} onChangeText={(last4) => this.setState({last4})} keyboardType="numeric" maxLength={4} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableNativeFeedback onPress={this.saveCard} background={TouchableNativeFeedback.Ripple('#00695C')}>
              <View style={styles.button}>
                <Text style={{color: '#FFFFFF'}}>Save Card</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <LoadingIndicator ref={(loader) => this.loadIndicator = loader} />
      </View>
    );
  },

  onBackPress() {
    this.props.navigator.pop();
  },

  saveCard() {
    this.loadIndicator.show();
    setTimeout(() => this.props.navigator.pop(), 2000);
  }
});

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#03A9F4',
    height: 56
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  formRow: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  labelText: {
    width: 150,
    fontSize: 18
  },
  fullInput: {
    width: 500,
    alignSelf: 'stretch'
  },
  buttonContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10
  },
  button: {
    padding: 10,
    backgroundColor: '#00BFA5',
    elevation: 5
  }
});

module.exports = AddCardScene;
