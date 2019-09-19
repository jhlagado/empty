export const nestedGet = (path: string, object: any, delim = '.') =>
  path.split(delim).reduce(
    (acc, key) => (acc && key in acc) ? acc[key] : undefined,
    object,
  );

