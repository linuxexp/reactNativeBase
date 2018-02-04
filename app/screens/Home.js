import React, {Component} from "react";

import {
    Card
} from "react-router-navigation";

import {
    View
} from "react-native";

import {
    Container,
    Text,
    Content,
    Button
} from 'native-base';

const NestedComponent = () => {
  return (
      <View>
          <Text>nested route</Text>
      </View>
  );
};

export default class Home extends Component {

    goToNested = () => {
      this.props.history.push("/app/nest")
    };

    render() {

        return (
            <Container>
                <Content padder>
                    <Text>
                        BoilerPlate for DataGrid's Native App
                    </Text>
                    <Button onPress={this.goToNested.bind(this)} block>
                        <Text>Test nested route</Text>
                    </Button>
                    <Card
                        exact
                        path="/app/nest"
                        component={NestedComponent}
                    />
                </Content>
            </Container>
        );
    }
}