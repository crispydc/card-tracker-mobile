'use strict';
import React, {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';


var DrawerMenuItem = React.createClass({
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
