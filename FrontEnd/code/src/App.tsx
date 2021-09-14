import './styles/app.sass';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from 'routes';
import Transitions from 'routes/Transitions';
import Page404 from 'screens/Page404';

/**
 * Entry level component to the application.
 *
 */
const App = () => (
	<Router>
		<Transitions>
			{routes.map(({ path, render }, index) => (
				<Route
					exact
					path={`/${path}`}
					render={() => render}
					key={index}
				/>
			))}
			<Route component={Page404} />
		</Transitions>
	</Router>
);
export default App;
