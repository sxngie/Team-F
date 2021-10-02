/*
	All of the subscriptions used in this application.
*/

export type chatSub = () => void;
export type userSub = (params: {}) => void;
export type messageSub = (params: {}) => void;
