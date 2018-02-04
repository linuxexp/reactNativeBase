import React, {Component} from "react";
import {Router, Route} from "react-router-native";

import {
    Container, Header, Left, Body,
    Right, Button, Icon, Title,
    Subtitle, Item, Input, Text,
    Content,
    List, ListItem, Separator,
    Drawer
} from 'native-base';

import SideBar from "./SideBar";

export default class Home extends Component {

    state = {
        toolBar: true
    };

    style = {
        button: {
            color: "#ffffff"
        }
    };

    update = () => this.setState({toolBar: !this.state.toolBar});

    openDrawer = () => {
        this.drawer._root.open()
    };

    closeDrawer = () => {
        this.drawer._root.close()
    };

    toolBar = () => {

        const toolBar = () => {
            return (
                <Header searchBar>
                    <Left>
                        <Button onPress={this.openDrawer.bind(this)} transparent>
                            <Icon style={this.style.button} name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>DataGrid</Title>
                        <Subtitle>ReactNativeBase</Subtitle>
                    </Body>
                    <Right>
                        <Button onPress={this.update.bind(this)} transparent>
                            <Icon style={this.style.button} name='search' />
                        </Button>
                    </Right>
                </Header>
            );
        };

        const searchBar = () => {
            return (
                <Header searchBar>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
            );
        };

        return (this.state.toolBar ? toolBar() : searchBar());
    };

    render() {

        return (
        <Drawer
            ref={(ref) => this.drawer = ref}
            onClose={() => this.closeDrawer()}
            content={<SideBar />}>
            <Container>
                {this.toolBar()}
                <Content padder>
                    <Text>
                        BoilerPlate for DataGrid's Native App
                    </Text>
                </Content>
            </Container>
        </Drawer>
        );
    }
}