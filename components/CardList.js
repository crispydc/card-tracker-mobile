'use strict';
import React, {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Navigator
} from 'react-native';

var CardList = React.createClass({

  render() {
    return (
      <View style={styles.cardList}>
        {this.props.cardList.map((card) => {
          return <Text key={card.id}>{card.id} : {card.name}</Text>;
        })}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  cardList: {
    padding: 20
  }
});

module.exports = CardList;
