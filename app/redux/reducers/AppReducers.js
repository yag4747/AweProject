/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import * as types from '../events/AppEvents';

const initialState = {
  top_data: [],
  middle_data: [],
  last_data: [],
  category: []
};

export function appReducer(state = initialState, action) {
  switch (action.type) {

    case types.GET_TOP_DATA:
      return {
        ...state,
        top_data: action.top_data,
      };

    case types.GET_MIDDLE_DATA:
      return {
        ...state,
        middle_data: action.middle_data,
      };

    case types.GET_LAST_DATA:
        return {
          ...state,
          last_data: action.last_data,
        };

    case types.GET_CATEGORY_DATA:
        return {
          ...state,
          category: action.category,
        };
    default:
      return state;
  }
}
