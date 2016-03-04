'use strict';

import React, {
  DrawerLayoutAndroid,
  ToolbarAndroid,
  Dimensions,
  View,
  StyleSheet
} from 'react-native';
const DrawerMenu = require('./DrawerMenu.android');
const Icon = require('react-native-vector-icons/MaterialIcons');

var MainNav = React.createClass({

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
        <View style={styles.container}>
          <CurrentScene navigator={this.props.navigator} user={this.props.user} />
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56
  }
});


module.exports = MainNav;
