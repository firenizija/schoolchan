import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore } from 'redux'
import allReducers from './redux/reducers'
import { Provider } from 'react-redux'
import SocketConnect from 'api/SocketConnect'

const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <SocketConnect />
    </Provider>, document.getElementById('root'));
