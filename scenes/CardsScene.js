'use strict';
import React, {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';

var CardsScene = React.createClass({
  launchAddNewCard: function() {
    console.log('new card!');
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Cards View
        </Text>
        <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    );
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
