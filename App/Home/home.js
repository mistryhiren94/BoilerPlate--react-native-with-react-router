import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Left, Body, Button, Icon, Title } from "native-base";
import Drawer from "react-native-drawer";
import styles from "./style";
import DrawerContent from "../DrawerContent";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Drawer
          type="overlay"
          tapToClose={true}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          negotiatePan
          tweenDuration={200}
          ref={ref => {
            this.drawer = ref;
          }}
          elevation={4}
          tweenHandler={ratio => ({
            mainOverlay: {
              opacity: ratio,
              backgroundColor: "rgba(101, 95, 95, 0)"
            }
          })}
          content={<DrawerContent />}
        >
          <View style={styles.mainView}>
            <Header
              androidStatusBarColor="rgb(247, 54, 54)"
              style={{ backgroundColor: "rgb(255, 2, 2)" }}
            >
              <Left>
                <Button
                  transparent
                  onPress={() => {
                    this.drawer.open();
                  }}
                >
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body>
                <Title>Header</Title>
              </Body>
            </Header>
            <View style={styles.mainbody}>
              <View style={styles.alignBody}>
                <Text>Hiii</Text>
              </View>
            </View>
          </View>
        </Drawer>
      </View>
    );
  }
}
