import { REGISTER_USER, GET_USERS } from '../actions/types';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      localStorage.setItem(
        'users',
        JSON.stringify([...state, { ...action.payload }])
      );
      return [...state, { ...action.payload }];
    case GET_USERS:
      return JSON.parse(localStorage.getItem('users'));
    default:
      return state;
  }
};

export default userReducer;
