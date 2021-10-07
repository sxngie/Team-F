import Page from 'common/components/Page';
import React, { lazy } from 'react';

export type RouteName = typeof routeNames[number];

export interface Route {
	path: RouteName;
	render?: React.ReactNode; // Screen component goes here.
	name: string;
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
const MessageCenter = lazy(() => import("screens/MessageCenter"));
const Profile = lazy(() => import("screens/Profile"));
const Settings = lazy(() => import("screens/Settings"));

/**
 * Application routes to be rendered.
 */
// TODO: Add corresponding screens for each route.
const routes: Route[] = [
	{
		path: "",
		render: (
			<Page footerHide separatorHeader notAuthorized>
				<Home />
			</Page>
		),
		name: "Home",
	},
	{ path: "music", render: <Music />, name: "Music" },
	{ path: "library", render: <Library />, name: "Library" },
	{ path: "discover", render: <Discover />, name: "Discover" },
	{
		path: "messages",
		render: (
			<Page footerHide separatorHeader notAuthorized>
				<MessageCenter />
			</Page>
		),
		name: "Messages",
	},
	{ path: "profile", render: <Profile />, name: "Profile" },
	{ path: "settings", render: <Settings />, name: "Settings" },
];

export default routes;
