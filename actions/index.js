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

export function deleteSymbol() {
  return {
    type: actions.DELETE_SYMBOL,
  };
}

export function deleteAll() {
  return {
    type: actions.DELETE_ALL,
  };
}

export function compute() {
  return {
    type: actions.COMPUTE,
  };
}

export function memoryClear() {
  return {
    type: actions.MEMORY_CLEAR,
  };
}

export function memoryStore(key) {
  return {
    type: actions.MEMORY_STORE,
    key,
  };
}

export function memoryReset() {
  return {
    type: actions.MEMORY_RESET,
  };
}
