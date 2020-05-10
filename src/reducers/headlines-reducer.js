import * as c from './../actions/ActionTypes';
const defaultState = {
  isLoading: false,
  headlines: [],
  error: null
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case c.REQUEST_HEADLINES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_HEADLINES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        headlines: action.headlines
      });
    default:
      return state;
  }
};