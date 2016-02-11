/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Dimensions,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ToolbarAndroid
} from 'react-native';
var DrawerMenu = require('./components/DrawerMenu.android');
var CardsScene = require('./scenes/CardsScene');
var ServicesScene = require('./scenes/ServicesScene');

var CardTracker = React.createClass({
  getInitialState: function() {
    return {
      scene: "cards"
    };
  },
  render: function() {
    return (
      <DrawerLayoutAndroid
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerWidth={Dimensions.get('window').width - 54}
        ref={(drawer) => { this.drawer = drawer; }}
        renderNavigationView={() => this.renderNavigation()}>
        {this.renderScene()}
      </DrawerLayoutAndroid>
    );
  },

  onDrawerItemPress: function(scene: string) {
      this.setState({scene: scene});
      this.drawer.closeDrawer();
  },

  renderNavigation: function() {
    return (
      <DrawerMenu onDrawerItemPress={this.onDrawerItemPress} />
    );
  },

  getCurrentScene: function() {
    if(this.state.scene === 'cards') {
      return (
        <CardsScene />
      );
    } else if(this.state.scene === 'services') {
      return (
        <ServicesScene />
      );
    }
  },

  renderToolbar: function() {
    var title;
    if(this.state.scene === 'cards') {
      title = 'Cards';
    } else if (this.state.scene === 'services') {
      title = 'Services';
    }

    return (
      <ToolbarAndroid
        navIcon={require('image!ic_menu_black_24dp')}
        onIconClicked={() => this.drawer.openDrawer()}
        style={styles.toolbar}
        title={title}
        ref={(toolbar) => {this.toolbar = toolbar} }
      />
    );
  },

  renderScene: function() {
    return (
      <View style={{flex: 1}}>
        {this.renderToolbar()}
        {this.getCurrentScene()}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#00BCD4',
    height: 56,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('CardTracker', () => CardTracker);

module.exports = CardTracker;
