import './styles/app.sass';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from 'routes';
import Development from 'routes/Development';
import Page404 from 'screens/Page404';

/**
 * Entry level component to the application.
 *
 */
const App = () => (
	<Router>
		<Switch>
			{routes.map(({ path, render }, index) => (
				<Route
					exact
					path={`/${path}`}
					render={() => render}
					key={index}
				/>
			))}
			<Development />
			<Route path="/*" component={Page404} />
		</Switch>
	</Router>
);
export default App;
