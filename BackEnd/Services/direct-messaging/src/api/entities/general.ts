import { role } from '../utils/enums';
import { Id } from '../utils/types';

export interface Message {
	id: Id;
	owner: Id; // User id
	chatId: Id;
	createdAt: string;
	updatedAt: string;
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

export interface Links {
	hasMore: boolean;
	cusror: number;
	links: string[];
}

export interface Files {
	hasMore: boolean;
	cursor: number;
	files: Files[];
}

export interface Messages {
	hasMore: boolean;
	messages: Message[];
	cursor: number; // Last index in the list you have fetched.
}

export interface Chat {
	id: Id;
	name: string;
	notification: boolean; // If the chat has a recent notification
	users: Member[];
	latest?: Message;
}

export interface User {
	id: Id;
	username: string;
	avatar: string;
}

export interface Member extends User {
	role: role;
}
