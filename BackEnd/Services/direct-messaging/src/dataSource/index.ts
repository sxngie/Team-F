import { ApolloContext } from 'api/apolloContext';
import { DataSource, DataSourceConfig } from 'apollo-datasource';

type C = Omit<ApolloContext, "dataSources">;

export default class ServerApi extends DataSource<C> {
	private context!: C;

	public constructor() {
		super();
	}

	public initialize(config: DataSourceConfig<C>) {
		this.context = config.context;
	}

	//TODO: create the data source methods to acces the data layer.
}
