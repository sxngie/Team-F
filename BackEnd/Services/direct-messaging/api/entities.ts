/*
    Direct Messaging Service:
    All entity definitions that belong to this api.
*/

export interface Message {
	id: string;
	owner: string; // User id
	chatId: string;
	createdAt: string;
	updatedAt: string;
	message: string;
	attachment: string; //TODO It should be Image or Music Type (or maybe an Attachment Interface)
	reply?: string;
}

export interface Messages {
	hasMore: boolean;
	messages: Message[];
	cursor: number; // Last index in the list you have fetched.
}

export interface Chat {
	id: string;
	title: string;
	count: number; // Amount of messages in a chat.
	users: User[];
	messages: Messages;
}

export interface User {
	id: string;
	username: string;
	avatar: string;
}
