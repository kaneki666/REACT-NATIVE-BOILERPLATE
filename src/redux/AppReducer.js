import {DEMO_TYPE} from './types';

const initialState = {
  number: 0,
};

export default SubscribeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEMO_TYPE:
      const payload = action.payload;
      let newValue = (state.number += payload);
      payload;
      return {...state, number: newValue};

    default:
      return state;
  }
};
