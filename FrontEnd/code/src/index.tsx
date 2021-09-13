import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { DEV_MODE } from 'utils/constants';

import App from './App';
import appSetup from './setup';

appSetup(DEV_MODE);

ReactDOM.render(
	<RecoilRoot>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</RecoilRoot>,
	document.getElementById("root")
);
