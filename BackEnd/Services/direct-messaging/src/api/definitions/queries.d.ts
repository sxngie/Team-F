/*
	All of the queries used in this application.
*/

import { FileType } from 'api/utils/enums';

import { Chat, File, Files, Links, Member, Message, Messages, User } from '../entities/general';
import { Id, Token } from '../utils/types';

/**
 * Fetches a specific chat message.
 *
 * @param {Id} id Message id.
 * @param {Token} token User auth token.
 * @returns {Message} Specific chat message.
 */
export type GetMessage = (params: { id: Id; token: Token }) => Message;

/**
 * Fetches messages in a given chat.
 *
 * @param {Id} id Chat id.
 * @param {number} pageSize Chunk size to fetch from the chat messages.
 * @param {number} cursor Starting index to fetch from the chat.
 * @param {Token} token User auth token.
 * @returns {Messages} Chat messages.
 */
export type GetMessages = (params: {
	id: Id;
	pageSize: number;
	cursor: number;
	token: Token;
}) => Messages;

/**
 * Fetches a specific chat from the chat id.
 * @param {Id} id Id of the chat to be fetched.
 * @param {Token} token User auth token.
 * @returns {Chat} Information of the chat.
 */
export type GetChat = (params: { id: Id; token: Token }) => Chat;

/**
 * Fetches a list of chat information of a user.
 * @param {Token} token User auth token.
 * @returns {Chat[]} A list of chat's the user has access to.
 */
export type GetChats = (params: { token: Token }) => Chat[];

/**
 * Fetch user information.
 * @param {Token} token User auth token.
 * @returns {User} User information.
 */
export type getUser = (params: { token: Token }) => User;

/**
 * Fetches a list of users that belong to a given chat.
 * @param {Id} chat Chat id.
 * @param {Token} token User auth token.
 * @returns {Member[]} List of the memebers that belong to a chat.
 */
export type GetUsers = (params: { chat: Id; token: Token }) => Member[];

/**
 * Fetch a specific file.
 * @param {Id} id File id.
 * @param {Token} token User auth token.
 * @param {FileType} type File type to fetch.
 * @returns {File} Requested file.
 */
export type GetFile = (params: {
	id: Id;
	token: Token;
	type: FileType;
}) => File;

/**
 * Fetches a list of files from a chat.
 * @param {Id} chat Chat id.
 * @param {Token} token User auth token.
 * @param {FileType} type File type to fetch for.
 * @param {number} pageSize Chunk size to of the list.
 * @param {number} cursor Current location of the list index.
 * @returns List of files.
 */
export type GetFiles = (params: {
	chat: Id;
	token: Token;
	type: FileType;
	pageSize: number;
	cursor: number;
}) => Files;

/**
 * Fetches the latest files.
 * @param {Id} chat Chat id.
 * @param {Token} token User auth token.
 * @param {FileType} type File type to fetch.
 * @param {number} pageSize Chunk size of the list.
 * @returns {File[]} List of files.
 */
export type getLastFiles = (params: {
	chat: Id;
	token: Token;
	type: FileType;
	pageSize: number;
}) => File[];

/**
 * Fetches a list of links in a chat.
 * @param {Id} chat Chat id.
 * @param {Token} token User auth token.
 * @param {number} pageSize Chunk size of the list.
 * @param {number} cursor Current location of the list index.
 * @returns {Links} List of links in a chat.
 */
export type GetLinks = (params: {
	chat: Id;
	token: Token;
	pageSize: number;
	cursor: number;
}) => Links;

/**
 * Fetches the latest links in a chat.
 * @param {Id} chat Chat id.
 * @param {Token} token User auth token.
 * @param {number} pageSize Chunk size of the list.
 * @returns {string[]} List of the most recent links.
 */
export type GetLastLinks = (params: {
	chat: Id;
	token: Token;
	pageSize: number;
}) => string[];
