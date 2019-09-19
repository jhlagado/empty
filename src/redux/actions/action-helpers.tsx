
export interface StandardFetchActionsInterface {
  readonly REQUEST: string;
  readonly SUCCESS: string;
  readonly FAILURE: string;
}

export const actionsFactory = (prefix: string, keys: string[]): any => {
  return keys.reduce(
    (acc: any, key) =>
      (acc[key] = `${prefix}_${key}`, acc),
    {},
  );
};

export const fetchActionsFactory = (prefix: string): StandardFetchActionsInterface => {
  return actionsFactory(prefix, ['REQUEST', 'SUCCESS', 'FAILURE']);
};
