import React from "react";
import {connect} from "react-redux";
import {getCount, increment, incrementAsync} from "./StoreProvider";

const StoreConsumer = (props) => (
    <div onClick={props.increment}>
        Class count is {props.count}
    </div>
);

const mapStateToProps = (state, props) => ({
   count: getCount(state)
});

export const ConnectedStore = connect(mapStateToProps, { increment })(StoreConsumer);
export const AsyncConnectedStore = connect(mapStateToProps, { increment: incrementAsync })(StoreConsumer);