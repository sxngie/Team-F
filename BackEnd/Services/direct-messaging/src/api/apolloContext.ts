import { ExpressContext } from 'apollo-server-express';

import MsgApi from '../dataSource';
import { getUserId } from '../utils/auth';

const dataSources = {
	serverApi: new MsgApi(),
};

export const context = ({ req, res }: ExpressContext) => ({
	req,
	res,
	userId: req && req.headers.authorization ? getUserId(req) : null,
	dataSources,
});

export type ApolloContext = ReturnType<typeof context>;
