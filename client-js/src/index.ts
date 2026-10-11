import WOMClient from './client.ts';

export * from '../../server/src/utils/shared/index.ts';
export * from './api-types.ts';

export * from './clients/CompetitionsClient.ts';
export * from './clients/DeltasClient.ts';
export * from './clients/EfficiencyClient.ts';
export * from './clients/NameChangesClient.ts';
export * from './clients/PlayersClient.ts';
export * from './clients/RecordsClient.ts';

// CI trigger 11

export { WOMClient };
