export interface Base {
	chat: {
		visible: boolean;
		chatId?: string;
	};
	setChat: React.Dispatch<
		React.SetStateAction<{
			visible: boolean;
			chatId?: string;
		}>
	>;
}
