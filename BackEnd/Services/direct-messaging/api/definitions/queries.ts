/*
	All of the queries used in this application.
*/

import { Message, Messages } from '../entities/general';

/**
 * Fetches a specific chat message.
 *
 * @param {string} id Message id.
 * @param {string} token User auth token.
 * @returns {Message} Specific chat message.
 */
export type getMessage = (params: { id: string; token: string }) => Message;

/**
 * Fetches messages in a given chat.
 *
 * @param {string} id Chat id.
 * @param {number} pageSize Chunk size to fetch from the chat messages.
 * @param {number} cursor Starting index to fetch from the chat.
 * @param {string} token User auth token.
 * @returns {Messages} Chat messages.
 */
export type getMessages = (params: {
	id: string;
	pageSize: number;
	cursor: number;
	token: string;
}) => Messages;
