/*
    Direct Messaging Service:
    All api call definitions that belong to this api. Separated into their
	respective categories.
*/

import * as mutations from './definitions/mutations';
import * as queries from './definitions/queries';
import * as subscriptions from './definitions/subscriptions';

const schema = {
	queries,
	mutations,
	subscriptions,
};

export default schema;
