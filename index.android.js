/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator,
  DrawerLayoutAndroid,
  Dimensions,
  StatusBar
} from 'react-native';
var AppRoutes = require('./components/AppRoutes');
var MainNav = require('./components/MainNavigation.android');
var DrawerMenu = require('./components/DrawerMenu.android');

var CardTracker = React.createClass({

  render: function() {
    var navMenu = (
      <DrawerMenu onMenuSelect={this.onMenuSelect} />
    );

    return (
      <DrawerLayoutAndroid
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerWidth={Dimensions.get('window').width - 54}
        ref={(drawer) => { this.drawer = drawer; }}
        renderNavigationView={() => navMenu}>
        <StatusBar backgroundColor="#0288D1" />
        <Navigator
          initialRoute={AppRoutes.getRoute('cards')}
          configureScene={(route, routeStack) => {
            if(route.animate) {
              return route.animate;
            }
          }}
          renderScene={(route, navigator) => {
            if(route.useMainNav) {
              return (
                <MainNav navigator={navigator} onIconPress={this.openNav} navTitle={route.navTitle} scene={route.scene} />
              );
            } else {
              //route controls its own fate
              return React.createElement(route.scene, {navigator: navigator});
            }
            throw new Error('Error during navigator scene rendering');
          }}
          ref={(navigator) => {this.navigator = navigator;}}
        />
      </DrawerLayoutAndroid>
    );
  },

  openNav: function() {
    this.drawer.openDrawer();
  },

  onMenuSelect: function(scene) {
    this.navigator.replace(AppRoutes.getRoute(scene));
    this.drawer.closeDrawer();
  }
});

AppRegistry.registerComponent('CardTracker', () => CardTracker);

module.exports = CardTracker;
