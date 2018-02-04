import React, {Component} from "react";

import {
    Text,
    Content,
    Container,
    H1
} from "native-base";

export default class SideBar extends Component {

    styles = {
        container: {
            backgroundColor: "white"
        }
    };

    render() {
        return (
            <Container style={this.styles.container}>
                <Content>
                    <H1>
                        Sidebar component
                    </H1>
                </Content>
            </Container>
        );
    }
}