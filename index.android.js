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
const AppRoutes = require('./components/AppRoutes');
const MainNav = require('./components/MainNavigation.android');
const DrawerMenu = require('./components/DrawerMenu.android');

const CardTracker = React.createClass({

  render() {
    var navMenu = (
      <DrawerMenu onMenuSelect={this.onMenuSelect} />
    );

    return (
      <DrawerLayoutAndroid
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerWidth={Dimensions.get('window').width - 54}
        ref={(drawer) => this.drawer = drawer}
        renderNavigationView={() => navMenu}>
        <StatusBar backgroundColor="#1976D2" />
        <Navigator
          initialRoute={AppRoutes.getRoute('cards')}
          configureScene={(route, routeStack) => {
            if(route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FadeAndroid;
          }}
          renderScene={(route, navigator) => {
            if(route.useMainNav) {
              return (
                <MainNav navigator={navigator} onIconPress={this.openNav} navTitle={route.navTitle} scene={route.scene} />
              );
            } else {
              //route controls its own fate
              return React.createElement(route.scene, {navigator});
            }
            throw new Error('Error during navigator scene rendering');
          }}
          ref={(navigator) => this.navigator = navigator}
        />
      </DrawerLayoutAndroid>
    );
  },

  openNav() {
    this.drawer.openDrawer();
  },

  onMenuSelect(scene) {
    this.navigator.replace(AppRoutes.getRoute(scene));
    this.drawer.closeDrawer();
  }
});

AppRegistry.registerComponent('CardTracker', () => CardTracker);

module.exports = CardTracker;
