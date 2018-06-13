import React, { Component } from 'react';
import {Body, Button, Drawer, Header, Left, Right, Text, Title} from 'native-base';
import {View} from "react-native";
import SideBar from "./SideBar/SideBar";
import Icon from "react-native-vector-icons/FontAwesome";
import {GlobalStyle} from "../../../style/GlobalStyle/GlobalStyle";

import PropTypes from "prop-types";

const Styles = {
    headerBtn: {
        color: "white"
    }
};

export default class NavigationDrawer extends Component {

    closeDrawer = () => {
        this.drawer._root.close()
    };

    openDrawer = () => {
        this.drawer._root.open()
    };

    render() {
        const {title, ...props} = this.props;

        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} title={title} {...props} />}
                onClose={() => this.closeDrawer()} >

                <Header {...props}>
                    <Left style={GlobalStyle.flexRow}>
                        <Button onPress={()=> this.openDrawer()} transparent>
                            <Icon style={Styles.headerBtn} size={20} name="bars" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{title || "DataGrid"}</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>

                {this.props.children}
            </Drawer>
        );
    }
}

NavigationDrawer.propTypes = {
    title: PropTypes.string.isRequired,
    navConf: PropTypes.array.isRequired
};