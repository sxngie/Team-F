import './styles/app.sass';

import ProtectedRoute from 'common/components/ProtectedRoute';
import { Route, Router } from 'react-router-dom';
import routes from 'routes';
import history from 'routes/history';
import Transitions from 'routes/Transitions';
import Page404 from 'screens/Page404';

/**
 * Entry level component to the application.
 *
 */
const App = () => (
	<Router history={history}>
		<Transitions>
			{routes.map(({ path, render, needAuth, exact }, i) => (
				<ProtectedRoute
					path={`/${path}`}
					render={render}
					key={i}
					needAuth={needAuth}
					exact={exact}
				/>
			))}
			<Route component={Page404} />
		</Transitions>
	</Router>
);

export default App;
