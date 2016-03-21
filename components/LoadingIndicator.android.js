'use strict';

import React, {
  View,
  ProgressBarAndroid,
  StyleSheet
} from 'react-native';

var LoadingIndicator = React.createClass({
  getInitialState() {
    return {
      show: false
    };
  },

  render() {
    if(this.state.loading) {
      return (
        <View style={styles.modal}>
          <ProgressBarAndroid styleAttr="Large" />
        </View>
      );
    }
    return null;
  },

  show() {
    this.setState({loading: true});
  },

  hide() {
    this.setState({loading: false});
  },

  toggle() {
    this.setState({loading: !this.state.loading});
  }
});

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

module.exports = LoadingIndicator;
