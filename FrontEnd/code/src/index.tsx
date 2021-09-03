import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './App';
import appSetup from './setup';

const dev = process.env.NODE_ENV !== "production";

appSetup(dev);

ReactDOM.render(
	<RecoilRoot>
		<Router>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>
	</RecoilRoot>,
	document.getElementById("root")
);
