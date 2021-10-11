import React from 'react';
import { Message as M } from 'utils/types/chat';

import Message from './Message';

interface Props {
	message: M;
}

const MessageType: React.FC<Props> = ({ message }) => {
	if (message.reply) {
		return null;
	}

	if (message.attachment) {
		return null;
	}

	return null;
};
export default MessageType;
