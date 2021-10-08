import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authAtom } from 'store/auth';

interface Props {
	path: string;
	render: (auth: boolean) => React.ReactNode;
	needAuth?: boolean;
}

/**
 * Redirects users if they are not authenticated.
 */
const ProtectedRoute: React.FC<Props> = ({ render, needAuth, ...rest }) => {
	const auth = useRecoilValue(authAtom);
	const hasAcces = !needAuth || auth.isAuth;
	return (
		<Route
			{...rest}
			exact
			render={(props) =>
				hasAcces ? (
					render(auth.isAuth)
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: {
								from: props.location,
							},
						}}
					/>
				)
			}
		/>
	);
};

export default ProtectedRoute;
