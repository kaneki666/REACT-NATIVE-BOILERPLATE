import {DEMO_TYPE} from '../types';

export const demoAction = (item) => {
  return (dispatch) => {
    dispatch({
      type: DEMO_TYPE,
      payload: item,
    });
  };
};
