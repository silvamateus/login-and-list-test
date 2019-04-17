import { createStore } from 'redux';
import rootReducer from '../reducers';
import { getUsers } from '../actions/userRegister';

const initialState = {
  users: [],
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const showStore = () => {
  const users = store.getState().users;
  if (
    !localStorage.getItem('users') ||
    localStorage.getItem('users').length < 1
  )
    localStorage.setItem('users', JSON.stringify(users));
};
const unsubscribe = () => store.subscribe(showStore);
unsubscribe();
export default store;
