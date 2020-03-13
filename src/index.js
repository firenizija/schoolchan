import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MobileApp from './components/MobileApp';
import App from './components/App';
import isMobile from 'is-mobile';

if (isMobile()) {
    ReactDOM.render(<MobileApp />, document.getElementById('root'));
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
}
