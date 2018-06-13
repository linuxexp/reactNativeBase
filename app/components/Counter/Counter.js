import React, { Component } from 'react';
import {View} from "react-native";
import {Button, Text} from "native-base";
import {connect} from "react-redux";
import {compose} from "redux";

import {CounterReducer, increment} from "./Counter.Store";
import {injectState} from "../../common/utils/utils";

class Counter extends Component {

    render() {
        const {value, increment} = this.props;
        return <View>
            <Text>Counter value {value}</Text>
            <Button onPress={() => increment()}>
                <Text>Increment</Text>
            </Button>
        </View>
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.get("value")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment())
    }
};

const withConnect = connect(injectState(mapStateToProps, {CounterReducer}),
    mapDispatchToProps);

export default compose(withConnect)(Counter);
