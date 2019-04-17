import { REGISTER_USER, GET_USERS } from '../actions/types';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return [...state, { ...action.payload }];
    case GET_USERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default userReducer;
