'use strict';

import React, {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';

var SubmitButton = React.createClass({

  propTypes: {
    label: React.PropTypes.string.isRequired,
    onPress: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress} background={TouchableNativeFeedback.Ripple('#00695C')}>
        <View style={styles.button}>
          <Text style={{color: '#FFFFFF'}}>{this.props.label}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
});

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#00BFA5',
    elevation: 5
  }
});

module.exports = SubmitButton;
