import './styles/app.sass';

import ProtectedRoute from 'common/components/ProtectedRoute';
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
			{routes.map(({ path, render, needAuth }, i) => (
				<ProtectedRoute
					path={`/${path}`}
					render={render}
					key={i}
					needAuth={needAuth}
				/>
			))}
			<Route component={Page404} />
		</Transitions>
	</Router>
);
export default App;
