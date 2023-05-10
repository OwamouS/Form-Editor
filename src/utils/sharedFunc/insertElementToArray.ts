export const insertElementToArray = <T extends { id: EntityId }>( a: T[], e: T, p: number ) => {
  return [...a.slice(0, p), e, ...a.slice(p)];
};
