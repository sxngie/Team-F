/*
	All of the subscriptions used in this application.
*/

import { Context, Info } from 'utils/types';

//TODO: Create types for the subscriptions.

export type ChatSub = (
	_,
	args: {},
	context: Context,
	{ dataSource }: Info
) => {};
export type UserSub = (
	_,
	args: {},
	context: Context,
	{ dataSource }: Info
) => {};
export type MessageSub = (
	_,
	args: {},
	context: Context,
	{ dataSource }: Info
) => {};
