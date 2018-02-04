/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Home from "./screens/Home";
import Auth from "./screens/Auth";

import { NativeRouter, Link } from 'react-router-native'
import { Card, Navigation } from 'react-router-navigation'

import DgNavBar from "./components/DgNavBar";

const NavBar = () => {
    return (
        <DgNavBar/>
    )
};

export default class App extends Component {

  styles = {
    bar: {
        backgroundColor: "transparent"
    }
  };

  render() {
    return (
        <NativeRouter>
            <Navigation
                renderNavBar={NavBar}
                style={this.styles.bar}
                title="DataGrid">
                <Card
                    exact
                    path="/"
                    component={Auth}
                    backButtonTitle="Auth"
                />
                <Card
                    exact
                    path="/app"
                    component={Home}
                />
            </Navigation>
        </NativeRouter>
    );
  }
}