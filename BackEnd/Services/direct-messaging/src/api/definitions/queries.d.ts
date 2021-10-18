/*
	All of the queries used in this application.
*/

import { FileType } from 'api/utils/enums';
import { GraphQLFieldResolver } from 'graphql';
import { Context, Info } from 'utils/types';

import { Chat, File, Files, Links, Member, Message, Messages, User } from '../entities/general';
import { Id } from '../utils/types';

/**
 * Fetches a specific chat message.
 * @param {Id} id Message id.
 * @returns {Message} Specific chat message.
 */
export type GetMessage = (
	_,
	args: { id: Id },
	context: Context,
	{ dataSource }: Info
) => Message;

/**
 * Fetches messages in a given chat.
 * @param {Id} id Chat id.
 * @param {number} pageSize Chunk size to fetch from the chat messages.
 * @param {number} cursor Starting index to fetch from the chat.
 * @returns {Messages} Chat messages.
 */
export type GetMessages = (
	_,
	args: {
		id: Id;
		pageSize: number;
		cursor: number;
	},
	context: Context,
	{ dataSource }: Info
) => Messages;

/**
 * Fetches a specific chat from the chat id.
 * @param {Id} id Id of the chat to be fetched.
 * @returns {Chat} Information of the chat.
 */
export type GetChat = (
	_,
	args: { id: Id },
	context: Context,
	{ dataSource }: Info
) => Chat;

/**
 * Fetches a list of chat information of a user.
 * @returns {Chat[]} A list of chat's the user has access to.
 */
export type GetChats = (
	_,
	__,
	context: Context,
	{ dataSource }: Info
) => Chat[];

/**
 * Fetch user information.
 * @returns {User} User information.
 */
export type getUser = (_, __, context: Context, { dataSource }: Info) => User;

/**
 * Fetches a list of users that belong to a given chat.
 * @param {Id} chat Chat id.
 * @returns {Member[]} List of the memebers that belong to a chat.
 */
export type GetUsers = (
	_,
	args: { chat: Id },
	context: Context,
	{ dataSource }: Info
) => Member[];

/**
 * Fetch a specific file.
 * @param {Id} id File id.
 * @param {FileType} type File type to fetch.
 * @returns {File} Requested file.
 */
export type GetFile = (
	_,
	args: { id: Id; type: FileType },
	context: Context,
	{ dataSource }: Info
) => File;

/**
 * Fetches a list of files from a chat.
 * @param {Id} chat Chat id.
 * @param {FileType} type File type to fetch for.
 * @param {number} pageSize Chunk size to of the list.
 * @param {number} cursor Current location of the list index.
 * @returns List of files.
 */
export type GetFiles = (
	_,
	args: {
		chat: Id;
		type: FileType;
		pageSize: number;
		cursor: number;
	},
	context: Context,
	{ dataSource }: Info
) => Files;

/**
 * Fetches the latest files.
 * @param {Id} chat Chat id.
 * @param {FileType} type File type to fetch.
 * @param {number} pageSize Chunk size of the list.
 * @returns {File[]} List of files.
 */
export type getLastFiles = (
	_,
	args: {
		chat: Id;
		type: FileType;
		pageSize: number;
	},
	context: Context,
	{ dataSource }: Info
) => File[];

/**
 * Fetches a list of links in a chat.
 * @param {Id} chat Chat id.
 * @param {number} pageSize Chunk size of the list.
 * @param {number} cursor Current location of the list index.
 * @returns {Links} List of links in a chat.
 */
export type GetLinks = (
	_,
	args: {
		chat: Id;
		pageSize: number;
		cursor: number;
	},
	context: Context,
	{ dataSource }: Info
) => Links;

/**
 * Fetches the latest links in a chat.
 * @param {Id} chat Chat id.
 * @param {number} pageSize Chunk size of the list.
 * @returns {string[]} List of the most recent links.
 */
export type GetLastLinks = (
	_,
	args: { chat: Id; pageSize: number },
	context: Context,
	{ dataSource }: Info
) => string[];
