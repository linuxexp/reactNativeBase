import React, {Component} from "react";

import {View} from "react-native";
import {Text} from 'native-base';
import {NavConf} from "../../NavConf";
import NavigationDrawer from "../../common/components/Drawer/NavigationDrawer";
import {GlobalStyle} from "../../style/GlobalStyle/GlobalStyle";
import {styleMerge} from "../../common/utils/utils";
import Counter from "../../components/Counter/Counter";

export default class Home extends Component {

    render() {

        return (
            <View style={GlobalStyle.flexExpand}>
                <NavigationDrawer title="DataGrid React-Native" navConf={NavConf}>
                    <View style={styleMerge(GlobalStyle.flexExpand, GlobalStyle.centerAlignColumn)}>
                        <Text style={GlobalStyle.smallText}>Boilerplate code for</Text>
                        <Text style={GlobalStyle.smallText}>DataGrid React-Native</Text>
                        <Counter/>
                    </View>
                </NavigationDrawer>
            </View>
        );
    }
}