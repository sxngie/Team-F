//TODO: Create the mutation entities.

import { Id } from 'api/utils/types';

export interface MessageInput {
	message?: String;
	reply?: Id;
	// Files are included in the body of the request.
}
