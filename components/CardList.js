'use strict';
import React, {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
const CardListItem = require('./CardListItem');
const Card = require('../data/card');

var CardList = React.createClass({

  propTypes: {
    cardList: React.PropTypes.arrayOf(Card).isRequired,
    uid: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <View style={styles.cardList}>
        <ScrollView>
          {this.props.cardList.map((card) => {
            return <CardListItem key={card.id} card={card} uid={this.props.uid} />;
          })}
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  cardList: {
    flex:1
  }
});

module.exports = CardList;
