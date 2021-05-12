import { actions } from '../actions';
import { evaluateur } from './evaluateur';

export const defaultState = {
  expression: '',
  memory: null,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.ADD_SYMBOL:
      return { ...state, expression: state.expression + action.key };

    case actions.DELETE_SYMBOL:
      return { ...state, expression: state.expression.substring(0, state.expression - 1) };

    case actions.DELETE_ALL:
      return { ...state, expression: defaultState.expression };

    case actions.COMPUTE:
      return { ...state, memory: evaluateur(state.expression) };

    case actions.MEMORY_STORE:
      return { ...state, memory: action.key };

    case actions.MEMORY_CLEAR:
      return { ...state, memory: 0 };

    case actions.MEMORY_RESET:
      return { ...state, memory: defaultState.memory };
    default:
      return state;
  }
}
