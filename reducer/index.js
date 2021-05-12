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
    default:
      return state;
  }
}
