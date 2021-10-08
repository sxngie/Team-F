import Page from 'common/components/Page';
import React, { lazy } from 'react';

export type RouteName = typeof routeNames[number];

export interface Route {
	path: RouteName;
	render: (auth: boolean) => React.ReactNode | null; // Screen component goes here.
	name: string;
	needAuth: boolean;
}

/**
 * All possible routes, in the application.
 */
const routeNames = [
	"", // This is reserved for the product page.
	"home",
	"music",
	"library",
	"discover",
	"messages",
	"profile",
	"settings",
	"support",
] as const;

//-----[Lazy Imports Screens]-----

const Home = lazy(() => import("screens/Home"));
const Music = lazy(() => import("screens/Music"));
const Library = lazy(() => import("screens/Library"));
const Discover = lazy(() => import("screens/Discover"));
const MessageCenter = lazy(() => import("screens/MessageCenter"));
const Profile = lazy(() => import("screens/Profile"));
const Settings = lazy(() => import("screens/Settings"));
const Product = lazy(() => import("screens/Product"));

/**
 * Application routes to be rendered.
 */
// TODO: Add corresponding screens for each route.
const routes: Route[] = [
	{
		path: "home",
		render: (auth) => (
			<Page separatorHeader authorized={auth}>
				<Home />
			</Page>
		),
		name: "Home",
		needAuth: true,
	},
	{
		path: "music",
		render: (auth) => (
			<Page authorized={auth}>
				<Music />
			</Page>
		),
		name: "Music",
		needAuth: true,
	},
	{
		path: "library",
		render: (auth) => (
			<Page authorized={auth}>
				<Library />
			</Page>
		),
		name: "Library",
		needAuth: true,
	},
	{
		path: "discover",
		render: (auth) => (
			<Page authorized={auth}>
				<Discover />
			</Page>
		),
		name: "Discover",
		needAuth: true,
	},
	{
		path: "messages",
		render: (auth) => (
			<Page footerHide separatorHeader authorized={auth}>
				<MessageCenter />
			</Page>
		),
		name: "Messages",
		needAuth: true,
	},
	{
		path: "profile",
		render: (auth) => (
			<Page authorized={auth}>
				<Profile />
			</Page>
		),
		name: "Profile",
		needAuth: true,
	},
	{
		path: "settings",
		render: (auth) => (
			<Page authorized={auth}>
				<Settings />
			</Page>
		),
		name: "Settings",
		needAuth: true,
	},
	{
		path: "",
		render: () => (
			<Page>
				<Product />
			</Page>
		),
		name: "Product",
		needAuth: false,
	}, // Implement the product page.
];

export default routes;
