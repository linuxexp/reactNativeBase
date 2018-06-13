import React, { Component } from 'react';
import {ScrollView, View, TouchableNativeFeedback} from "react-native";
import {Button, H2, List, ListItem, Text} from "native-base";
import {Styles} from "./styles";
import {styleMerge} from "../../../utils/utils";

import Collapsible from "react-native-collapsible";

import Icon from "react-native-vector-icons/FontAwesome";
import {GlobalStyle} from "../../../../style/GlobalStyle/GlobalStyle";

import PropTypes from "prop-types";

class NavRecord extends Component {

    state = {
        collapsed: true
    };

    toggleCollapse = () => {
        this.setState({
           collapsed: !this.state.collapsed
        });
    };

    render() {

        const {nav} = this.props;

        return <View>
            <TouchableNativeFeedback onPress={() => this.toggleCollapse()}>
                <View style={styleMerge(GlobalStyle.flexRow, GlobalStyle.paddedContainer)}>
                    <Icon style={styleMerge(GlobalStyle.lightText, Styles.navIcon)}
                          size={20} name={nav.icon} />
                    <Text style={Styles.navItemText}>{nav.label}</Text>
                    <View style={GlobalStyle.flexExpand} />
                    {
                        nav.nav && <Icon size={20} name={this.state.collapsed?"angle-down":"angle-up"} />
                    }
                </View>
            </TouchableNativeFeedback>
            <Collapsible collapsed={this.state.collapsed}>
                <View style={Styles.collapsedView}>
                    {
                        nav.nav && nav.nav.length>0 &&
                            nav.nav.map((n, i) => <NavRecord key={i} nav={n}/>)
                    }
                </View>
            </Collapsible>
        </View>
    }
}

export default class SideBar extends Component {

    render() {

        const {title, navConf} = this.props;

        return <View style={styleMerge(Styles.container, GlobalStyle.flexExpand)}>
            <View style={styleMerge(GlobalStyle.paddedContainer, Styles.brandContainer)}>
                <H2 style={Styles.brandText}>{title}</H2>
            </View>
            <View style={GlobalStyle.flexExpand}>
                <ScrollView>
                    {
                        navConf.map((nav, i) => <NavRecord key={i} nav={nav} />)
                    }
                </ScrollView>
            </View>
            <View style={GlobalStyle.paddedContainer}>
                <Text style={GlobalStyle.smallText}>Build 1, version 0.1</Text>
            </View>
        </View>
    }
}

SideBar.propTypes = {
    title: PropTypes.string.isRequired,
    navConf: PropTypes.array.isRequired
};