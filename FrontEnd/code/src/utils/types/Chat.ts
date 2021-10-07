export interface Chat {
	id: string;
	name: string;
	lastMessage?: string;
	timeStamp?: Date;
	avatars: string[];
	notifications?: number;
	favorite?: boolean;
}

export interface Favorite {
	id: string;
	name: string;
	avatars: string[];
	notifications: boolean;
}
