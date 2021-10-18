import ServerApi from 'dataSource';

export interface Context {
	userId: string | null;
}

export interface Info {
	datasources: typeof ServerApi;
}
