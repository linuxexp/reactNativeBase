/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {View, Text} from "react-native";

import Home from "./screens/Home";
import Auth from "./screens/Auth";

import { NativeRouter, Link } from 'react-router-native'
import { Card, Navigation } from 'react-router-navigation'

export default class App extends Component {

  styles = {
    bar: {
        backgroundColor: "transparent"
    }
  };


  render() {
    return (
        <NativeRouter>
            <Navigation style={this.styles.bar}>
                <Card
                    exact
                    path="/"
                    component={Auth}
                    backButtonTitle="Auth"
                />
                <Card
                    path="/app"
                    component={Home}
                />
            </Navigation>
        </NativeRouter>
    );
  }
}