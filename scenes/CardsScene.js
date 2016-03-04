'use strict';
import React, {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Navigator
} from 'react-native';
const CardList = require('../components/CardList');
const CardService = require('../data/cardFirebaseService');

var CardsScene = React.createClass({

  getInitialState() {
    return {
      cardlist: [],
      cardsService: new CardService()
    }
  },

  componentWillMount() {
    //setup data listeners
    this.state.cardsService.onCardAdd((card) => {
      let cardlist = this.state.cardlist;
      cardlist.push(card);
      this.setState({cardlist});
    });
  },

  componentWillUnmount() {
    //clean up data listeners
    this.state.cardsService.detachAll();
  },

  render() {
    return (
      <View style={styles.container}>
        <CardList cardList={this.state.cardlist} />
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
