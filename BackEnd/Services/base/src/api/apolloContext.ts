import { ExpressContext } from 'apollo-server-express';

import ServerApi from '../dataSource';
import { getUserId } from '../utils/auth';

export const dataSources = () => ({
	serverApi: new ServerApi(),
});

export type DataSources = { dataSources: ReturnType<typeof dataSources> };

export const context = ({ req, res }: ExpressContext) => ({
	req,
	res,
	userId: req && req.headers.authorization ? getUserId(req) : null,
});

export type ApolloContext = ReturnType<typeof context> & DataSources;
