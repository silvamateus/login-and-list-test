import { REGISTER_USER, GET_USERS } from './types';

export const userRegister = user => {
  return {
    type: REGISTER_USER,
    payload: {
      id: `_${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      ...user,
    },
  };
};

export const getUsers = stateUsers => {
  return {
    type: GET_USERS,
    payload: [...stateUsers],
  };
};
