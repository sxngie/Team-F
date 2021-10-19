import { ExpressContext } from 'apollo-server-express';

import { PrismaClient } from '@prisma/client';

import ServerApi from '../dataSource';
import { getUserId } from '../utils/auth';

const prisma = new PrismaClient({ errorFormat: "minimal" });
const dataSources = {
	serverApi: new ServerApi(prisma),
};

export const context = ({ req, res }: ExpressContext) => ({
	req,
	res,
	userId: req && req.headers.authorization ? getUserId(req) : null,
	dataSources,
});

export type ApolloContext = ReturnType<typeof context>;
