import { ApolloContext } from 'api/apolloContext';
import { DataSource, DataSourceConfig } from 'apollo-datasource';

import { PrismaClient } from '@prisma/client';

type C = Omit<ApolloContext, "dataSources">;

export default class ServerApi extends DataSource<C> {
	private context!: C;
	private prisma: PrismaClient;

	public constructor(prisma: PrismaClient) {
		super();
		this.prisma = prisma;
	}

	public initialize(config: DataSourceConfig<C>) {
		this.context = config.context;
	}

	//TODO: create the data source methods to acces the data layer.
}
