import React, { lazy } from 'react';

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

//-----[Lazy Imports Screens]-----

const Home = lazy(() => import("screens/Home"));
const Music = lazy(() => import("screens/Music"));
const Library = lazy(() => import("screens/Library"));
const Discover = lazy(() => import("screens/Discover"));
const Messages = lazy(() => import("screens/Messages"));
const Profile = lazy(() => import("screens/Profile"));
const Settings = lazy(() => import("screens/Settings"));

/**
 * Application routes to be rendered.
 */
// TODO: Add corresponding screens for each route.
const routes: Route[] = [
	{ path: "", render: <Home /> },
	{ path: "music", render: <Music /> },
	{ path: "library", render: <Library /> },
	{ path: "discover", render: <Discover /> },
	{ path: "messages", render: <Messages /> },
	{ path: "profile", render: <Profile /> },
	{ path: "settings", render: <Settings /> },
];

export default routes;
