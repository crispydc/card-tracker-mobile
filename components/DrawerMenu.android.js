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
        <DrawerMenuItem scene="cards" label="View Cards" onDrawerItemPress={this.props.onMenuSelect} />
        <DrawerMenuItem scene="services" label="View Services" onDrawerItemPress={this.props.onMenuSelect} />
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
