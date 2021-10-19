import { ApolloContext } from 'api/apolloContext';
import { DataSource, DataSourceConfig } from 'apollo-datasource';

import { PrismaClient } from '@prisma/client';

type C = Omit<ApolloContext, "dataSources">;

export default class MsgApi extends DataSource<C> {
	private context!: C;
	private prisma: PrismaClient;

	public constructor() {
		super();
		this.prisma = new PrismaClient({ errorFormat: "minimal" });
	}

	public initialize(config: DataSourceConfig<C>) {
		this.context = config.context;
	}

	/**
	 * Disconnect from the database.\
	 * *Should run this when this class is no longer in use.*
	 */
	public disconnect() {
		this.prisma.$disconnect();
	}

	//TODO: create the data source methods to acces the data layer.
}
