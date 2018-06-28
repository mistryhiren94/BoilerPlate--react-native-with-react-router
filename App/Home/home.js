import React, { Component } from 'react';
import {
  View,
  Text
 } from 'react-native';
 import styles from './style';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.alignContainer}>
          <Text>Home</Text>
        </View>
      </View>
    );
  }
}