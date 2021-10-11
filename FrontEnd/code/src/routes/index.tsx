import Page from 'common/components/Page';
import React, { lazy } from 'react';

export type RouteName = typeof routeNames[number];

export interface Route {
	path: RouteName;
	render: React.ReactNode; // Screen component goes here.
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
		render: (
			<Page separatorHeader>
				<Home />
			</Page>
		),
		name: "Home",
		needAuth: true,
	},
	{
		path: "music",
		render: (
			<Page>
				<Music />
			</Page>
		),
		name: "Music",
		needAuth: true,
	},
	{
		path: "library",
		render: (
			<Page>
				<Library />
			</Page>
		),
		name: "Library",
		needAuth: true,
	},
	{
		path: "discover",
		render: (
			<Page>
				<Discover />
			</Page>
		),
		name: "Discover",
		needAuth: true,
	},
	{
		path: "messages",
		render: (
			<Page footerHide separatorHeader>
				<MessageCenter />
			</Page>
		),
		name: "Messages",
		needAuth: true,
	},
	{
		path: "profile",
		render: (
			<Page>
				<Profile />
			</Page>
		),
		name: "Profile",
		needAuth: true,
	},
	{
		path: "settings",
		render: (
			<Page>
				<Settings />
			</Page>
		),
		name: "Settings",
		needAuth: true,
	},
	{
		path: "",
		render: (
			<Page bodyScroll>
				<Product />
			</Page>
		),
		name: "Product",
		needAuth: false,
	},
	{
		path: "support",
		render: null,
		name: "Support",
		needAuth: false,
	},
];

export default routes;
