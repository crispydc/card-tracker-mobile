'use strict';
import React, {
  View,
  StyleSheet
} from 'react-native';
var DrawerMenuItem = require('./DrawerMenuItem.android');

var DrawerMenu = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <DrawerMenuItem {...this.props} scene="cards" label="View Cards" />
        <DrawerMenuItem {...this.props} scene="services" label="View Services" />
      </View>
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
