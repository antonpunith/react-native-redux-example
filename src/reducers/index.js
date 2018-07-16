import { combineReducers } from 'redux';

const incrementReducer = (state, action) => {
  console.log('incrementReducer', value);
  let value = 1;
  if (action.type === 'increment_value') {
    value = state + 1;
  }
  return value;
};

export default combineReducers({ value: incrementReducer });
