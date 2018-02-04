import React, {Component} from "react";

import {
  Dimensions,
  View
} from "react-native"

import {
    Container,
    Content,
    Text,
    Button,
    Form, Item, Input, Label
} from "native-base";

export default class Auth extends Component {

    goToApp = () => {
      this.props.history.push("/app");
    };

    render() {
        const {height: screenHeight} = Dimensions.get('window');

        return (
                    <View style={{flex: 1, height: screenHeight, justifyContent: 'center', flexDirection: "column"}}>
                        <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                            <View style={{margin: 20, backgroundColor: "blue", flexDirection: "row", alignItems: "stretch", justifyContent: "center"}}>
                                <Button style={{width: "100%"}} onPress={this.goToApp.bind(this)} block>
                                    <Text>Login</Text>
                                </Button>
                            </View>
                        </Form>
                    </View>
        );
    }
}