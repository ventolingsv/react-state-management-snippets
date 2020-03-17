import React from "react";
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

//Action types
const INCREMENT = 'INCREMENT';

//Reducer
const initialState = {
    count: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        default: return state;
    }
};

//Store
const store = createStore(combineReducers({
    reducer
}), applyMiddleware(thunk));

export const StoreProvider = (props) => (
    <Provider store={store}>
        {props.children}
    </Provider>
);

//Actions
export const increment = () => ({
    type: INCREMENT
});

export const incrementAsync = () => async (dispatch, getState) => {
        console.log(getCount(getState()));
        await new Promise((resolve) => resolve());
        dispatch(increment());
};

//Selectors
export const getCount = (state) => state.reducer.count;