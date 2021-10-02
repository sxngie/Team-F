import { role } from '../utils/enums';
import { Id } from '../utils/types';

export interface Message {
	id: Id;
	owner: Id; // User id
	chatId: Id;
	createdAt: string;
	updatedAt: string;
	message: string;
	attachment: string; //TODO It should be Image or Music Type (or maybe an Attachment Interface)
	reply?: string; // Id of the message being replied to.
}

export interface Messages {
	hasMore: boolean;
	messages: Message[];
	cursor: number; // Last index in the list you have fetched.
}

export interface Chat {
	id: Id;
	name: string;
	count: number; // Amount of messages in a chat.
	users: Member[];
	messages: Messages;
}

export interface User {
	id: Id;
	username: string;
	avatar: string;
}

export interface Member extends User {
	role: role;
}
