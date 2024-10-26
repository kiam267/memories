import * as api from '../api/index';

import { AUTH } from '../constants/actionTypes';

export const signin = (formData, navigate) => {
  return async dispatch => {
    try {
      const response = await api.signin(formData);
      console.log(response);
      
    await dispatch({
        type: AUTH,
        data: response.data,
      });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
};
export const signup = (formData, navigate) => {
  return async dispatch => {
    try {
      const response = await api.signup(formData);
      console.log(response);
      
     await dispatch({
       type: AUTH,
       data: response.data,
     });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
};
