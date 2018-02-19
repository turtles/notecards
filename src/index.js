import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import notecardsAppReducers from './Reducers/index.js';

let store = createStore(
		notecardsAppReducers,
		/* for redux devtools */
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
