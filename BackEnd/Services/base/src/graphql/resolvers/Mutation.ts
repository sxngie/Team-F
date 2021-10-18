import { MutationResolvers } from 'api/generated';

//TODO: Implement the mutation resolvers.

const Mutation: MutationResolvers = {
	createMessage: async (_, { message }) => message,
};

export default Mutation;
