'use strict';

import React, {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Alert
} from 'react-native';
const Icon = require('react-native-vector-icons/MaterialIcons');
const CardService = require('../data/cardFirebaseService');

var CardItem = React.createClass({

  render() {
    return (
      <View style={styles.cardItem}>
        <TouchableNativeFeedback onPress={this.openCardDetails}>
          <View style={styles.cardDescContainer}>
            <Text style={styles.cardName}>{this.props.card.name}</Text>
            <Text style={styles.cardNum}>...{this.props.card.last4}</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this.confirmDelete}>
          <View style={styles.actionItem}>
            <Icon style={styles.actionIcon} name="delete" />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  },

  confirmDelete() {
    Alert.alert(
      `Delete '${this.props.card.name}'?`,
      'Are you sure you want to delete this card? This action cannot be undone.',
      [
        {text: 'Cancel'},
        {text: 'Delete', onPress: this.deleteCard}
      ]
    );
  },

  deleteCard() {
    const service = new CardService(this.props.uid);
    service.deleteCard(this.props.card.id);
  }
});

const styles = StyleSheet.create({
  cardItem: {
    height: 75,
    margin: 20,
    marginBottom: 0,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  cardDescContainer: {
    flex:1,
    height: 75,
    padding: 10,
    justifyContent: 'center'
  },
  cardName: {
    fontSize: 18,
    color: '#757575'
  },
  cardNum: {
    fontSize: 14,
    color: '#9E9E9E'
  },
  actionItem: {
    padding: 10,
    height: 75,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionIcon: {
    fontSize: 32,
    color: '#757575'
  }

});

module.exports = CardItem;
