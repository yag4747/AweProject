/* eslint-disable prettier/prettier */
import * as types from '../events/AppEvents';
import {GET} from '../../apiHelper/ApiServices';
import {GET_CAT_DATA, GET_LAST_DATA, GET_MIDDLE_DATA, GET_TOP_DATA} from '../../apiHelper/Api';

export const onGetTopData = (authRequest, props) => {
  return async dispatch => {
    await GET(
      GET_TOP_DATA,
      props,
      authRequest?.token,
      dispatch,
      function (response) {
        if (response) {
          dispatch({
            type: types.GET_TOP_DATA,
            top_data: response?.responseData
          });
        }
      },
    );
  };
};


export const onGetMiddleData = (authRequest, props) => {
  return async dispatch => {
    await GET(
      GET_MIDDLE_DATA,
      props,
      authRequest?.token,
      dispatch,
      function (response) {
        if (response) {
          dispatch({
            type: types.GET_MIDDLE_DATA,
            middle_data: response?.responseData
          });
        }
      },
    );
  };
};


export const onGetLastData = (authRequest, props) => {
  return async dispatch => {
    await GET(
      GET_LAST_DATA,
      props,
      authRequest?.token,
      dispatch,
      function (response) {
        if (response) {
          dispatch({
            type: types.GET_LAST_DATA,
            last_data: response?.responseData
          });
        }
      },
    );
  };
};

export const onGetCategoryData = (authRequest, props) => {
  return async dispatch => {
    await GET(
      GET_CAT_DATA,
      props,
      authRequest?.token,
      dispatch,
      function (response) {
        if (response) {
          dispatch({
            type: types.GET_CATEGORY_DATA,
            category: response?.responseData
          });
        }
      },
    );
  };
};



