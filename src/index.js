import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import notecardsAppReducers from './Reducers/index.js';

const initialState = {
	notecards: [
		{word:"word", definition:"definition"}
	]
};

const store = createStore(
		notecardsAppReducers,
		initialState
	);

render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
