import { formatNumber } from 'utils/functions/formatter';

// This is the data to be returned internally in the component.
export interface Fetch {
	isAdded: boolean; // If you are following this person or not.
	name: string;
	banner: string;
	avatar: string;
	verified: boolean;
	followers: number;
	following: number;
	description: string;
	mutuals: {
		top: {
			name: string;
			avatar: string;
		}[];
		extra: number;
	};
}

const useGetUser = (username: string): Fetch => {
	return {
		name: "SpongeBob",
		description: `the official SpongeBob SquarePants Twitter from @Nickelodeon! Pineapple stream now on @ParamountPlus`,
		avatar: "https://pbs.twimg.com/profile_images/1210618202457292802/lt9KD2lt_400x400.jpg",
		banner: "https://pbs.twimg.com/profile_banners/17088779/1577468848/1500x500",
		followers: 2_400_000,
		following: 20,
		verified: true,
		isAdded: false,
		mutuals: {
			top: [
				{
					name: "Patrick Star",
					avatar: "https://pbs.twimg.com/profile_images/378800000303523651/315e7425ef4a1cc0e247bf7d784afdbd_400x400.jpeg",
				},
				{
					name: "Sandy Cheeks",
					avatar: "https://pbs.twimg.com/profile_images/1627312003/SANDYproud_400x400.jpg",
				},
				{
					name: "Sandy Cheeks",
					avatar: "https://pbs.twimg.com/profile_images/1627312003/SANDYproud_400x400.jpg",
				},
			],
			extra: 0,
		},
	};
};

export const getMutualStr = (mutuals: Fetch["mutuals"]) => {
	if (mutuals.top.length === 0)
		return "Not followed by anyone you're following";

	switch (mutuals.extra) {
		case 0:
			return `Followed by ${userJoin(mutuals.top)}`;
		default:
			return `Followed by ${userJoin(mutuals.top)} and ${
				mutuals.extra
			} others you follow`;
	}
};

function userJoin(usrs: Fetch["mutuals"]["top"]): string {
	const length = usrs.length;

	switch (length) {
		case 1:
			return usrs[0].name;

		case 2:
			return `${usrs[0].name} and ${usrs[1].name}`;

		default:
			const list = usrs.map(({ name }) => name);
			list[length - 1] = `and ${list[length - 1]}`;
			return list.join(", ");
	}
}

/**
 * - 100,000,000 <= n | B with one decimal placement
 * - 100,000 <= n | M with one decimal placement
 * - 10,000 <= n | K with one decimal placement
 * - 10,000 > n | normal return string
 *
 * @param n Amount to change
 * @returns Formated text
 */
export const followShort = (n: number): string => {
	const b = 1_000_000_000;
	const m = 1_000_000;

	if (n >= b) {
		return `${(n / b).toFixed(1)}B`;
	} else if (n >= m) {
		return `${(n / m).toFixed(1)}M`;
	} else if (n >= 10_000) {
		return `${(n / 1_000).toFixed(1)}K`;
	}
	return formatNumber(n);
};

export default useGetUser;
