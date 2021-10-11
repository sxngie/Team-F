import faker from 'faker';
import { Chat, Favorite, Message } from 'utils/types/chat';
import { Notification } from 'utils/types/header';

function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export const avatars = (min = 1, max = 3) =>
	Array.from({ length: getRandomInt(1, 4) }, () => faker.image.avatar());

export const getFakeChats = (length: number): Chat[] =>
	Array.from({ length }, () => {
		const icons = avatars();
		const name =
			icons.length > 1
				? `${faker.music.genre()} ${faker.random.word()}`
				: `${faker.name.firstName()} ${faker.name.lastName()}`;

		return {
			id: faker.datatype.uuid(),
			name,
			lastMessage: faker.lorem.sentence(),
			timeStamp: faker.date.between(
				new Date(2021, 8, 1),
				new Date(2021, 10, 1)
			),
			avatars: icons,
			notifications: Math.random() < 0.5,
			favorite: Math.random() < 0.2,
		};
	});

export const convertToFav = (chats: Chat[], length = 6): Favorite[] =>
	chats
		.filter((c) => c.favorite)
		.map((chat) => ({
			id: chat.id,
			name: chat.name,
			avatars: chat.avatars,
			notifications: chat.notifications,
		}));

export const getFakeFavorites = (length = 6): Favorite[] =>
	Array.from({ length }, () => {
		const icons = avatars();
		const name =
			icons.length > 1
				? `${faker.music.genre()} ${faker.random.word()}`
				: `${faker.name.firstName()} ${faker.name.lastName()}`;

		return {
			id: faker.datatype.uuid(),
			name,
			avatars: icons,
			notifications: Math.random() < 0.5,
		};
	});

export const fakeChats = getFakeChats(20).sort((a, b) =>
	!a.timeStamp || !b.timeStamp
		? -1
		: b.timeStamp.getTime() - a.timeStamp.getTime()
);

export const fakeFavorites = convertToFav(fakeChats);

export const getFakeNotifications = (length: number): Notification[] =>
	Array.from({ length }, () => ({
		avatar: faker.image.avatar(),
		content: faker.lorem.sentence(),
		date: faker.date.soon(),
		title: `${faker.name.firstName()} ${faker.name.lastName()}`,
		url: "messages",
	}));

export const fakeNotifications = getFakeNotifications(6).sort((a, b) =>
	!a.date || !b.date ? -1 : b.date.getTime() - a.date.getTime()
);

export const getFakeMessages = (length: number, you: string): Message[] =>
	Array.from({ length }, () => ({
		chatId: faker.datatype.uuid(),
		createdAt: faker.date.soon(),
		id: faker.datatype.uuid(),
		owner: Math.random() > 0.5 ? faker.datatype.uuid() : you,
		updatedAt: faker.date.soon(),
		message: faker.lorem.sentences(),
	})).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
