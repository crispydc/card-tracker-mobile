'use strict';
import React, {
  View,
  ScrollView,
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
