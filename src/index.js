import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App.js';

ReactDOM.render(
	<App />,
	document.getElementById('app')
	);

module.hot.accept();