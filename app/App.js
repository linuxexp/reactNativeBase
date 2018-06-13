/**
 * Boilerplate code for react-native project for DataGrid
 * Author: Raja Jamwal
 */

import React, { Component } from 'react';

import Home from "./screens/Home/Home";

import getTheme from "../native-base-theme/components";
import material from "../native-base-theme/variables/material";
import {createDrawerNavigator} from "react-navigation";
import {Root, StyleProvider} from "native-base";
import {StatusBar, AsyncStorage} from "react-native";
import {GlobalStyle} from "./style/GlobalStyle/GlobalStyle";

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {AppStore} from "./store/store";

import {Provider} from "react-redux";
import {LoadingScreen} from "./common/LoadingScreen/LoadingScreen";

import {transformJsToStore} from "./common/utils/utils";

let store;

const APP_KEY = "reactNativeBase.datagrids.in";
const loadFromStorage = () => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(APP_KEY).then((j) => {
                resolve(transformJsToStore(JSON.parse(j), AppStore()) || AppStore());
            });
        });
    };
const hydrate = () => {
    return new Promise((resolve, reject) => {
        loadFromStorage().then((config) => {
            store = createStore(AppStore, config);
            store.subscribe(() => {
                    AsyncStorage.setItem(APP_KEY, JSON.stringify(store.getState()));
            });
            resolve();
        });
    });
};

const RootNavigation = createDrawerNavigator(
    {
        Home: {
            screen: Home
        },
    },
    {
        initialRouteName: "Home"
    }
);

export default class App extends Component {

    state = {
        loading: true,
    };

    componentWillMount() {
        hydrate().then((d) => {
            this.setState({loading: false});
        });
    }

    render() {
        const {loading} =  this.state;
        if (loading) return <LoadingScreen />;
        return (
            <Provider store={store}>
                <StyleProvider style={getTheme(material)}>
                    <Root>
                        <StatusBar
                            backgroundColor={GlobalStyle.primaryColor}
                            barStyle="light-content"
                        />
                        <RootNavigation/>
                    </Root>
                </StyleProvider>
            </Provider>
        );
    }
}