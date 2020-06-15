import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer';
import saga from './sagas';
import createSagaMiddleware from 'redux-saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

//apply middleware on store
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//run saga generator fn
sagaMiddleware.run(saga);

//render app with provider
ReactDOM.render( <Provider store={store}> <App/> </Provider>, document.getElementById('root') );
