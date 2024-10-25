import {
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_ALL,
} from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...state, action.payload];

    case UPDATE:
    case LIKE:
      return state.map(post =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return state.filter(post => post._id !== action.payload);

    default:
      return state;
  }
};
