import { useEffect, useState } from 'react';

/**
 * Specifies if the user is online or not.
 * @returns {boolean} Online status
 */
const useOnline = () => {
	const [online, setOnline] = useState(navigator.onLine);

	const handleOffline = () => setOnline(false);

	const handleOnline = () => setOnline(true);

	useEffect(() => {
		setOnline(navigator.onLine);
		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);

	return online;
};

export default useOnline;
