/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { View } from "react-native";
import { NativeRouter, Route } from "react-router-native";

import Login from "./App/Login";
import SignUp from "./App/SignUp";
import Home from "./App/Home";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <NativeRouter>
        <View>
          <Route exact path="/" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/home" component={Home} />
        </View>
      </NativeRouter>
    );
  }
}
