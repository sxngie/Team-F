import './Index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import appSetup from './setup';

const dev = process.env.NODE_ENV !== "production";

appSetup(dev);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
