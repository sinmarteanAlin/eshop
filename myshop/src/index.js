import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
    rootReducer
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));


