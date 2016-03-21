'use strict';

import React, {
  ToolbarAndroid,
  View,
  StyleSheet,
  Component
} from 'react-native';
const Icon = require('react-native-vector-icons/MaterialIcons');

var MainNav = React.createClass({

  propTypes: {
    scene: React.PropTypes.instanceOf(Component).isRequired,
    onIconPress: React.PropTypes.func.isRequired,
    navTitle: React.PropTypes.string.isRequired
  },

  render: function() {
    //get current scene
    let CurrentScene = this.props.scene;

    return (
      <View style={{flex:1}}>
        <Icon.ToolbarAndroid
          navIconName="menu"
          iconColor="#FFFFFF"
          iconSize={32}
          onIconClicked={this.props.onIconPress}
          title={this.props.navTitle}
          titleColor="#FFFFFF"
          style={styles.toolbar}
        />
      <CurrentScene {...this.props} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56
  }
});


module.exports = MainNav;
