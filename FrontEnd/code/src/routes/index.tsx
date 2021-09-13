import React from 'react';

export type RouteName = typeof routeNames[number];

export interface Route {
	path: RouteName;
	render?: React.ReactNode; // Screen component goes here.
}

/**
 * All possible routes, in the application.
 */
const routeNames = [
	"",
	"music",
	"library",
	"discover",
	"messages",
	"profile",
	"settings",
] as const;

/**
 * Application routes to be rendered.
 */
const routes: Route[] = [
	{ path: "" },
	{ path: "music" },
	{ path: "library" },
	{ path: "discover" },
	{ path: "messages" },
	{ path: "profile" },
	{ path: "settings" },
];

export default routes;
