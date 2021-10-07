export interface Chat {
	id: string;
	name: string;
	lastMessage?: string;
	timeStamp?: Date;
	avatars: string[];
	notifications: boolean;
	favorite?: boolean;
}

export interface Favorite {
	id: string;
	name: string;
	avatars: string[];
	notifications: boolean;
}
