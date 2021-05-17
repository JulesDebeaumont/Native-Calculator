import { actions } from '../actions/index';
import { evaluateur } from './evaluateur';

export const defaultState = {
  expression: '',
  memory: null,
  color: '#e39612',
};

function shuffleColor() {
  // eslint-disable-next-line no-bitwise
  return `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.ADD_SYMBOL:
      return { ...state, expression: state.expression + action.key };

    case actions.DELETE_SYMBOL:
      return { ...state, expression: state.expression.slice(0, -1) };

    case actions.DELETE_ALL:
      return { ...state, expression: defaultState.expression };

    case actions.COMPUTE:
      return { ...state, expression: evaluateur(state.expression) };

    case actions.MEMORY_STORE:
      return { ...state, memory: state.expression };

    case actions.MEMORY_CLEAR:
      return { ...state, memory: null };

    case actions.MEMORY_RESTORE:
      return { ...state, expression: state.expression + state.memory };

    case actions.SHUFFLE_COLOR:
      return { ...state, color: shuffleColor() };

    default:
      return state;
  }
}
