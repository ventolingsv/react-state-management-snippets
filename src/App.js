import React from 'react';
import './App.css';
import {ComponentWithState, FunctionalState} from "./components/state/ComponentWithState";
import ContextProvider from "./components/context/ContextProvider";
import {ClassContextConsumer, ContextConsumer, FunctionalContextConsumer} from "./components/context/ContextConsumer";
import {StoreProvider} from "./components/redux/StoreProvider";
import {AsyncConnectedStore, ConnectedStore} from "./components/redux/StoreConsumer";

function App() {
  return (
    <div className="App">
        <div>
            <b>State</b>
            <ComponentWithState/>
            <FunctionalState/>
        </div>
        <div>
            <b>Context</b>
            <ContextProvider>
                <ContextConsumer/>
                <ClassContextConsumer/>
                <FunctionalContextConsumer/>
            </ContextProvider>
        </div>
        <div>
            <b>Redux</b>
            <StoreProvider>
                <ConnectedStore/>
                <AsyncConnectedStore/>
            </StoreProvider>
        </div>
    </div>
  );
}

export default App;
