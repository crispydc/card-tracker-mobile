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
const Icon = require('react-native-vector-icons/MaterialIcons');

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
            <View style={styles.addContainer}>
              <Icon style={styles.button} name="add-circle" />
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
  addContainer: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    elevation: 10
  },
  button: {
    color: '#00BFA5',
    fontSize: 56
  }
});

module.exports = CardsScene;
