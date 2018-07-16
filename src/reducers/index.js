import { combineReducers } from 'redux';


const incrementReducer = () => ({
  value: 5
});

export default combineReducers({ incrementReducer });
