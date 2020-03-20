import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MobileApp from './components/MobileApp';
import App from './components/App';
import isMobile from 'is-mobile';
import { createStore } from 'redux'
import allReducers from './redux/reducers'
import { Provider } from 'react-redux'

const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


if (isMobile()) {
    ReactDOM.render(
        <Provider store={store}>
            <MobileApp />
        </Provider>
        , document.getElementById('root'));
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
}
