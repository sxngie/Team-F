import { DataSource, DataSourceConfig } from 'apollo-datasource';

export default class ServerApi<T> extends DataSource {
	private context!: T;

	public constructor() {
		super();
	}

	public initialize(config: DataSourceConfig<T>) {
		this.context = config.context;
	}

	//TODO: create the data source methods to acces the data layer.
}