import headlinesReducer from '../../reducers/headlines-reducer';
import * as c from './../../actions/ActionTypes';


describe('headlinesReducer', () => {

  const defaultState = {
    isLoading: false,
    headlines: [],
    error: null
  };
  let action;
  test('should successfully return the default state if no action is passed into it', () => {
    expect(headlinesReducer(defaultState, {type: null })).toEqual(
      {
        isLoading: false,
        headlines: [],
        error: null
      }
    );
  });
  test('requesting headlines should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_HEADLINES
    };

    expect(headlinesReducer(defaultState, action)).toEqual({
        isLoading: true,
        headlines: [],
        error: null
    });
  });
});