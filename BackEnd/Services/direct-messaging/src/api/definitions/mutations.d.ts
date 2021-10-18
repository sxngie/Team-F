/*
	All of the mutations used in this application.
*/

import { Chat, Member, Message } from 'api/entities/general';
import { MessageInput } from 'api/entities/mutation';
import { role } from 'api/utils/enums';
import { Id } from 'api/utils/types';

/**
 * Join a given chat.
 * @param {Id} chat Chat id.
 * @returns {boolean} If user joinned successfully.
 */
export type JoinChat = (params: { chat: Id }) => boolean;

/**
 * Creates a message in a chat.
 * @param {Id} chat Chat id.
 * @param {MessageInput} message The message to be created.
 * @returns The created message.
 */
export type CreateMessage = (params: {
	chat: Id;
	message: MessageInput;
}) => Message;

/**
 * Deletes a message in a chat.
 * @param {Id} id Message id.
 * @returns {boolean} If the message was deleted successfully.
 */
export type DeleteMessage = (params: { id: Id }) => boolean;

/**
 * Leave a given chat.
 * @param {Id} chat Chat id.
 * @returns {boolean} If user successfully left a chat.
 */
export type LeaveChat = (params: { chat: Id }) => boolean;

/**
 * Add a user to a chat.
 * @param {Id} chat Chat id.
 * @param {Id} username User to be added into the chat.
 * @param {role} role Role to be assigned to the new user.
 * @returns {boolean} If the user was successfully added to the chat.
 */
export type AddUser = (params: {
	chat: Id;
	username: Id;
	role: role;
}) => boolean;

/**
 * Remove a user from a chat.
 * @param {Id} chat Chat id.
 * @param {Id} username User to be removed from the chat.
 * @returns {boolean} If the user was successfully removed from the chat.
 */
export type RemoveUser = (params: { chat: Id; username: Id }) => boolean;

/**
 * Creates a chat.
 * @param {string} name Chat name.
 * @returns {Chat} Created chat.
 */
export type CreateChat = (params: { name: string }) => Chat;

/**
 * Edit the name of a chat.
 * @param {Id} chat Chat id.
 * @param {string} name New chat name.
 * @returns {Chat} Edited chat.
 */
export type EditChat = (params: { chat: Id; name: string }) => Chat;

/**
 * Deletes a chat.
 * @param {Id} chat Chat id.
 * @returns {boolean} If the chat was successfully deleted.
 */
export type DeleteChat = (params: { chat: Id }) => boolean;

/**
 * Edits the role of a user in a chat.
 * @param {Id} chat Chat id.
 * @param {Id} username User thats role will change.
 * @param {role} role New user role.
 * @returns {Member} Updated user.
 */
export type EditUserRole = (params: {
	chat: Id;
	username: Id;
	role: role;
}) => Member;
