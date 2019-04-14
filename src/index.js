import React from 'react';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from "./cat-fact/reducers";
import {Provider} from "react-redux";



const initialState = {
    selectCatData: {
        fact: '',
        image: ''
    }
};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            createLogger() // neat middleware that logs actions
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

