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

var AddCardScene = React.createClass({
  getInitialState: function() {
      return {
        name: '',
        type: 'visa',
        last4: ''
      }
  },

  render: function() {
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
            <TextInput style={{flex:1}} onChangeText={(text) => this.setState({'name':text})} />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.labelText}>Card Type</Text>
            <Picker
              style={{width: 150}}
              selectedValue={this.state.type}
              onValueChange={(type) => this.setState({type: type})}>
              <Picker.Item label="Visa" value="visa" />
              <Picker.Item label="Mastercard" value="mc" />
              <Picker.Item label="Amex" value="amex" />
              <Picker.Item label="Discover" value="discover" />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.labelText}>Last 4</Text>
            <TextInput style={{width: 150}} onChangeText={(text) => this.setState({'last4':text})} keyboardType="numeric" maxLength={4} />
          </View>
        </View>
      </View>
    );
  },

  onBackPress: function() {
    this.props.navigator.pop();
  }
});

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#03A9F4',
    height: 56
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF'
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
  }
});

module.exports = AddCardScene;
