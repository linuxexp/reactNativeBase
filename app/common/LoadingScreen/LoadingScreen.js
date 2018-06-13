import React, {Component} from "react";
import {StatusBar, View} from "react-native";
import {H1} from "native-base";
import {styleMerge} from "../utils/utils";
import {GlobalStyle} from "../../style/GlobalStyle/GlobalStyle";

const styles = {
    loadingScreen: {
        backgroundColor: GlobalStyle.primaryColor
    }
};

export const LoadingScreen = (props) => {
    return <View style={styleMerge(GlobalStyle.flexExpand, styles.loadingScreen, GlobalStyle.centerAlignColumn)}>
        <StatusBar
            backgroundColor={GlobalStyle.primaryColor}
            barStyle="light-content"
        />
        <H1 style={GlobalStyle.brightLightText}>DataGrid</H1>
    </View>
};