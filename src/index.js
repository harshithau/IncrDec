// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Reducer from './Store/reducer';


// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// const store = createStore(Reducer);

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Reducer from './Reducers';
import ReduxThunk from 'redux-thunk'

import { Provider } from 'react-redux'; 

import { createStore, applyMiddleware, compose } from 'redux'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); 
serviceWorker.unregister();
