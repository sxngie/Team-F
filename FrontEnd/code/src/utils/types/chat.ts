import { Id } from './auth';

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

export interface Message {
	id: Id;
	owner: string; // name
	chatId: Id;
	createdAt: Date;
	updatedAt: Date;
	message?: string; // Only undefined if it includes an attachment.
	attachment?: File;
	reply?: Id; // Id of the message being replied to.
}

export interface File {
	id: Id;
	name: string;
	mimeType: string;
	size: string;
}
