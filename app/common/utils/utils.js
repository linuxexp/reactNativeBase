import merge from "lodash/merge";
import keys from "lodash/keys";
import head from "lodash/head";
import intersection from "lodash/intersection";
import union from "lodash/union";
import {fromJS} from "immutable";

export const styleMerge = (...args) => {
    return merge({}, ...args);
};

export const injectState = (mapStateToProps, reducerKeyed) => {
    const reducerKey = head(keys(reducerKeyed));
    return (state) => {
      return mapStateToProps(state[reducerKey]);
    };
};

export const transformJsToStore = (js, targetStore) => {
    if (!js) return targetStore;
    // remove any reducers which were removed before & add new reducer if there are any
    const reducers = union(intersection(keys(js), keys(targetStore)), keys(targetStore));
    let immutableStore = {};
    reducers.forEach((reducer) => {
        immutableStore[reducer] = fromJS(js[reducer]);
    });
    return immutableStore;
};