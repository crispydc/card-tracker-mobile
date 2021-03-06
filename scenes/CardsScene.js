'use strict';
import React, {
  View,
  TouchableNativeFeedback,
  StyleSheet,
  Navigator
} from 'react-native';
const CardList = require('../components/CardList');
const CardService = require('../data/cardFirebaseService');
const Icon = require('react-native-vector-icons/MaterialIcons');

var CardsScene = React.createClass({

  propTypes: {
    uid: React.PropTypes.string.isRequired,
    navigator: React.PropTypes.instanceOf(Navigator).isRequired
  },

  getInitialState() {
    return {
      cardlist: []
    };
  },

  componentWillMount() {
    //create card service
    const cardsService = new CardService(this.props.uid);

    //setup data listeners
    cardsService.onCardAdd((card) => {
      let cardlist = this.state.cardlist;
      cardlist.push(card);
      this.setState({cardlist});
    });
    cardsService.onCardDelete((removedId) => {
      const cardlist = this.state.cardlist;
      const filteredCards = cardlist.filter((c) => {
        return c.id != removedId;
      });
      this.setState({cardlist: filteredCards});
    });
  },

  componentWillUnmount() {
    //clean up data listeners
    const cardsService = new CardService(this.props.uid);
    cardsService.detachAll();
  },

  render() {
    return (
      <View style={styles.container}>
        <CardList cardList={this.state.cardlist} uid={this.props.uid} />
        <TouchableNativeFeedback onPress={this.onAddCardPress}>
            <View style={styles.addContainer}>
              <Icon style={styles.button} name="add" />
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
    backgroundColor: '#F5F5F5'
  },
  addContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#00BFA5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    position: 'absolute',
    bottom: 25,
    right: 25,
    elevation: 10
  },
  button: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 30,
    textAlignVertical: 'center'
  }
});

module.exports = CardsScene;
