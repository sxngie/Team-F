/*
	All of the mutations used in this application.
*/

import { Chat, Member, Message } from 'api/entities/general';
import { MessageInput } from 'api/entities/mutation';
import { role } from 'api/utils/enums';
import { Id, Token } from 'api/utils/types';

/**
 * Join a given chat.
 * @param {Id} chat Chat id.
 * @param {Token} token User auth token.
 * @returns {boolean} If user joinned successfully.
 */
export type JoinChat = (params: { chat: Id; token: Token }) => boolean;

/**
 * Creates a message in a chat.
 * @param {Id} chat Chat id.
 * @param {Token} token User auth token.
 * @param {MessageInput} message The message to be created.
 * @returns The created message.
 */
export type CreateMessage = (params: {
	chat: Id;
	token: Token;
	message: MessageInput;
}) => Message;

/**
 * Deletes a message in a chat.
 * @param {Id} id Message id.
 * @param {Token} token User auth token.
 * @returns {boolean} If the message was deleted successfully.
 */
export type DeleteMessage = (params: { id: Id; token: Token }) => boolean;

/**
 * Leave a given chat.
 * @param {Id} chat Chat id.
 * @param {Token} token User auth token.
 * @returns {boolean} If user successfully left a chat.
 */
export type LeaveChat = (params: { chat: Id; token: Token }) => boolean;

/**
 * Add a user to a chat.
 * @param {Id} chat Chat id.
 * @param {Token} token User auth token.
 * @param {Id} username User to be added into the chat.
 * @param {role} role Role to be assigned to the new user.
 * @returns {boolean} If the user was successfully added to the chat.
 */
export type AddUser = (params: {
	chat: Id;
	token: Token;
	username: Id;
	role: role;
}) => boolean;

/**
 * Remove a user from a chat.
 * @param {Id} chat Chat id.
 * @param {Token} token User auth token.
 * @param {Id} username User to be removed from the chat.
 * @returns {boolean} If the user was successfully removed from the chat.
 */
export type RemoveUser = (params: {
	chat: Id;
	token: Token;
	username: Id;
}) => boolean;

/**
 * Creates a chat.
 * @param {string} name Chat name.
 * @param {Token} token user auth token.
 * @returns {Chat} Created chat.
 */
export type CreateChat = (params: { name: string; token: Token }) => Chat;

/**
 * Edit the name of a chat.
 * @param {Id} chat Chat id.
 * @param {Token} token User auth token.
 * @param {string} name New chat name.
 * @returns {Chat} Edited chat.
 */
export type EditChat = (params: {
	chat: Id;
	token: Token;
	name: string;
}) => Chat;

/**
 * Deletes a chat.
 * @param {Id} chat Chat id.
 * @param {Token} token User auth token.
 * @returns {boolean} If the chat was successfully deleted.
 */
export type DeleteChat = (params: { chat: Id; token: Token }) => boolean;

/**
 * Edits the role of a user in a chat.
 * @param {Id} chat Chat id.
 * @param {Token} token User auth token.
 * @param {Id} username User thats role will change.
 * @param {role} role New user role.
 * @returns {Member} Updated user.
 */
export type EditUserRole = (params: {
	chat: Id;
	token: Token;
	username: Id;
	role: role;
}) => Member;
