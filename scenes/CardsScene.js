'use strict';
import React, {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Navigator
} from 'react-native';

var CardsScene = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Cards View
        </Text>
        <TouchableNativeFeedback onPress={this.onAddCardPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    );
  },

  onAddCardPress: function() {
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
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#03A9F4',
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
