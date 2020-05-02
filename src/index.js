import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todoApp, globalStates } from './store';

const store = createStore(
	globalStates,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

serviceWorker.unregister();
