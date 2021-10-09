import { RouteName } from 'routes';

export interface Notification {
	title: string;
	content: string;
	date: Date;
	avatar: string;
	url: RouteName;
}
