'use strict';

import React, {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
const Icon = require('react-native-vector-icons/MaterialIcons')

var CardItem = React.createClass({

  render() {
    return (
      <View style={styles.cardItem}>
        <Text style={styles.cardName}>{this.props.name} (...{this.props.last4})</Text>
        <Icon style={styles.actionIcon} name="delete" />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  cardItem: {
    height: 50,
    margin: 20,
    marginBottom: 0,
    padding: 10,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  cardName: {
    flex:1
  },
  actionIcon: {
    fontSize: 32,
    color: '#757575'
  }

});

module.exports = CardItem;
