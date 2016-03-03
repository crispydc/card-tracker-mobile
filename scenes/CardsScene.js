'use strict';
import React, {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Navigator
} from 'react-native';

var CardsScene = React.createClass({
  getInitialState() {
    return {
        cards: this.props.user.cards
    }
  },

  render() {
    //setup cards list - convert to array
    const cardList = Object.keys(this.state.cards).map((k) => {return this.state.cards[k]});

    return (
      <View style={styles.container}>
        <View style={styles.cardList}>
          {cardList.map((card) => {
            return <Text key={card.id}>{card.id} : {card.name}</Text>;
          })}
        </View>
        <TouchableNativeFeedback onPress={this.onAddCardPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    );
  },

  onAddCardPress() {
    this.props.navigator.push({
      scene: require('./AddCardScene'),
      useMainNav: false,
      sceneConfig: Navigator.SceneConfigs.FloatFromBottomAndroid
    });
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#F5F5F5',
  },
  cardList: {
    padding: 20
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#00BFA5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    position: 'absolute',
    bottom: 35,
    right: 35,
    elevation: 10
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 30,
    textAlignVertical: 'center'
  }
});

module.exports = CardsScene;
