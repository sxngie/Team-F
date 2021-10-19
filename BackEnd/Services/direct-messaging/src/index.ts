import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { importSchema } from 'graphql-import';
import { join } from 'path';

import { context } from './api/apolloContext';
import config from './config.json';
import resolvers from './graphql/resolvers';

const app = express();
app.set("trust proxy", 1);

const typeDefs = importSchema(join(__dirname, "./graphql/schema.gql"));

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context,
	formatError: (err) => new Error(err.message), // should change in the future.
});

/**
 * Current work around for known issue:
 * https://github.com/nestjs/graphql/issues/1621#issuecomment-878474079
 */
const run = async () => {
	await server.start();
	server.applyMiddleware({ app, cors: true });
};
run();

app.listen({ port: config.port }, () => {
	console.log(
		`${config.name} ready at: http://localhost:${config.port}${server.graphqlPath}`
	);
});
