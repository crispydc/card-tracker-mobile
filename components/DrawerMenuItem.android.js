'use strict';
import React, {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Component
} from 'react-native';


var DrawerMenuItem = React.createClass({

  propTypes: {
    onDrawerItemPress: React.PropTypes.func.isRequired,
    scene: React.PropTypes.instanceOf(Component),
    label: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <TouchableNativeFeedback onPress={() => this.props.onDrawerItemPress(this.props.scene)}>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>{this.props.label}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
});

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  item: {
    margin: 30,
    fontSize: 15,
    textAlign: 'left'
  }
});

module.exports = DrawerMenuItem;
