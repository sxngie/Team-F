export interface Chat extends Favorite {
	lastMessage?: string;
	timeStamp?: Date;
	favorite?: boolean;
}

export interface Favorite {
	id: string;
	name: string;
	avatars: string[];
	notifications: boolean;
}
