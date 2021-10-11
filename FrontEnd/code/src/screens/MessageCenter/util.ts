export interface Base {
	chat: {
		visible: boolean;
		chatId?: string;
		info: boolean;
	};
	setChat: React.Dispatch<
		React.SetStateAction<{
			visible: boolean;
			chatId?: string;
			info: boolean;
		}>
	>;
}
