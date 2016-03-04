'use strict';
import React, {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Navigator
} from 'react-native';
const CardListItem = require('./CardListItem');

var CardList = React.createClass({

  render() {
    return (
      <View style={styles.cardList}>
        {this.props.cardList.map((card) => {
          return <CardListItem key={card.id} name={card.name} last4={card.last4}/>;
        })}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  cardList: {
  }
});

module.exports = CardList;
