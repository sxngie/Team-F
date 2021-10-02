/*
	All of the mutations used in this application.
*/

export type joinChat = (params: {}) => void;
export type createMessage = (params: {}) => void;
export type deleteMessage = (params: {}) => void;
export type leaveChat = (params: {}) => void;
export type addUser = (params: {}) => void;
export type removeUser = (params: {}) => void;
export type createChat = (params: {}) => void;
export type editChat = (params: {}) => void;
export type deleteChat = (params: {}) => void;
export type changeUserRole = (params: {}) => void;
