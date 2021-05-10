export const actions = {
  ADD_SYMBOL: 'ADD_SYMBOL',
  DELETE_SYMBOL: 'DELETE_SYMBOL',
  DELETE_ALL: 'DELETE_ALL',
  COMPUTE: 'COMPUTE',
  MEMORY_STORE: 'MEMORY_STORE',
  MEMORY_CLEAR: 'MEMORY_CLEAR',
  MEMORY_RESET: 'MEMORY_RESET',
};

export function addSymbol(key) {
  return {
    type: actions.ADD_SYMBOL,
    key,
  };
}
