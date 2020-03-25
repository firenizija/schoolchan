import React from 'react';
import * as ServiceWorker from './serviceWorker'
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore } from 'redux';
import allReducers from './redux/reducers';
import { Provider } from 'react-redux';
import SocketConnect from 'api/SocketConnect';

const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <SocketConnect />
    </Provider>, document.getElementById('root'));

ServiceWorker.register();

if ('serviceWorker' in navigator) {
    console.log("Will the service worker register?");
    navigator.serviceWorker.register('./serviceWorker.js')
        .then(function (reg) {
            console.log("Yes, it did.");
        }).catch(function (err) {
            console.log("No it didn't. This happened: ", err)
        });
}