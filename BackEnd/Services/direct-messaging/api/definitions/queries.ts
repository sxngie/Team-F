/*
	All of the queries used in this application.
*/

import { Message, Messages } from '../entities/general';
import { Id, Token } from '../utils/types';

/**
 * Fetches a specific chat message.
 *
 * @param {Id} id Message id.
 * @param {Token} token User auth token.
 * @returns {Message} Specific chat message.
 */
export type getMessage = (params: { id: Id; token: Token }) => Message;

/**
 * Fetches messages in a given chat.
 *
 * @param {Id} id Chat id.
 * @param {number} pageSize Chunk size to fetch from the chat messages.
 * @param {number} cursor Starting index to fetch from the chat.
 * @param {Token} token User auth token.
 * @returns {Messages} Chat messages.
 */
export type getMessages = (params: {
	id: Id;
	pageSize: number;
	cursor: number;
	token: Token;
}) => Messages;

export type getChats = (params: {}) => void;
export type getChat = (params: {}) => void;
export type getUsers = (params: {}) => void;
