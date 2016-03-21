'use strict';
import React, {
  View,
  StyleSheet,
  Alert
} from 'react-native';
var DrawerMenuItem = require('./DrawerMenuItem.android');

var DrawerMenu = React.createClass({

  propTypes: {
    onMenuSelect: React.PropTypes.func.isRequired,
    onLogout: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <View style={styles.container}>
        <DrawerMenuItem scene="cards" label="View Cards" onDrawerItemPress={this.props.onMenuSelect} />
        <DrawerMenuItem scene="services" label="View Services" onDrawerItemPress={this.props.onMenuSelect} />
        <DrawerMenuItem scene="logout" label="Logout" onDrawerItemPress={this.confirmLogout} />
      </View>
    );
  },

  confirmLogout() {
    Alert.alert(
      'Logout?',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel'},
        {text: 'Logout', onPress: this.props.onLogout}
      ]
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

module.exports = DrawerMenu;
