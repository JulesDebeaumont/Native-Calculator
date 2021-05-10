import { actions } from '../actions';

const defaultState = {
  expression: '',
  memory: null,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.ADD_SYMBOL:
      return { ...state, expression: state.expression + action.key };

    case actions.DELETE_SYMBOL:
      return { ...state, expression: state.expression.substring(0, state.expression - 1)};

    case actions.DELETE_ALL:
      return { ...state, expression: defaultState.expression };

    case actions.COMPUTE:
        return { ...state, value:}
    default:
      return state;
  }
}
