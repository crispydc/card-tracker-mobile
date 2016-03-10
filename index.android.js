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
  StatusBar,
  AsyncStorage
} from 'react-native';

const AppRoutes = require('./components/AppRoutes');
const MainNav = require('./components/MainNavigation.android');
const DrawerMenu = require('./components/DrawerMenu.android');
const LoginScene = require('./scenes/PasswordLoginScene');
const AuthFirebaseService = require('./data/authFirebaseService');

const TOKEN_KEY = "AUTH_TOKEN";

const CardTracker = React.createClass({

  getInitialState() {
    return {
      user: null
    }
  },

  componentDidMount() {
    //check storage for auth token
    AsyncStorage.getItem(TOKEN_KEY, (error, authToken) => {
      if(authToken !== null) {
        //attempt Firebase login using token
        const authService = new AuthFirebaseService();
        authService.authWithToken(authToken, (authData) => {
          this.setState({user: authData});
        });
      }
    });
  },

  render() {
    if(!this.state.user) {

      //show login
      return (
        <LoginScene onLogin={this.onLogin} />
      );

    } else {

      var navMenu = (
        <DrawerMenu onMenuSelect={this.onMenuSelect} onLogout={this.onLogout} />
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
                  <MainNav navigator={navigator} uid={this.state.user.uid} onIconPress={this.openNav} navTitle={route.navTitle} scene={route.scene} />
                );
              } else {
                //route controls its own fate
                return React.createElement(route.scene, {navigator, uid: this.state.user.uid});
              }
              throw new Error('Error during navigator scene rendering');
            }}
            ref={(navigator) => this.navigator = navigator}
          />
        </DrawerLayoutAndroid>
      );
    }
  },

  openNav() {
    this.drawer.openDrawer();
  },

  onMenuSelect(scene) {
    this.navigator.replace(AppRoutes.getRoute(scene));
    this.drawer.closeDrawer();
  },

  onLogin(credentials) {
    //firebase Login
    const authService = new AuthFirebaseService();
    authService.authWithPassword(credentials, (authData) => {
      //save token into storage
      AsyncStorage.setItem(TOKEN_KEY, authData.token, (error) => {
        if(error) {
          console.warn('error saving auth token: ', error);
        } else {
          console.log('successfully saved auth token.');
        }
      });
      this.setState({user: authData});
    });
  },

  onLogout() {
    const authService = new AuthFirebaseService();
    authService.logout();
    this.setState({user: null});

    //remove stored auth token
    AsyncStorage.removeItem(TOKEN_KEY);
  }
});

AppRegistry.registerComponent('CardTracker', () => CardTracker);

module.exports = CardTracker;
