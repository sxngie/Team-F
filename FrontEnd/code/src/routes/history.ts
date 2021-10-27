import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
export default history;

export const navToUser = (username: string, location?: string) => {
	// Stop process if there are any white spaces int he username.
	if (/\s/g.test(username)) return;
	const param = location ? `/${location}` : "";
	const path = `/user/${username + param}`;

	history.push(path);
};
