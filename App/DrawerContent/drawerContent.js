import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Header, Left, Body, Icon, Title } from "native-base";
import styles from "./style";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          androidStatusBarColor="rgb(247, 54, 54)"
          style={{ backgroundColor: "rgb(247, 54, 54)" }}
        >
          <Left>
            <Icon name="person" style={{ color: "#fff", fontSize: 20 }} />
          </Left>
          <Body>
            <Title>Welcome</Title>
          </Body>
        </Header>
        <ScrollView
          style={styles.drawerContentalign}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.alignRow}>
            <Icon name="home" style={{ color: "#636262", fontSize: 20 }} />
            <Text style={styles.paddingLeft10}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.alignRow}>
            <Icon name="cart" style={{ color: "#636262", fontSize: 20 }} />
            <Text style={styles.paddingLeft10}>Cart</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
