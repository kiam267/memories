import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: '' }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem(
        'profile',
        JSON.stringify({ ...action?.data })
      );
      return { ...state, authData: action?.data };

    case LOGOUT:
      localStorage.removeItem('profile');
      return { ...state, authData: null };

    default:
      return state; // Always return the state by default
  }
};

export default authReducer;
