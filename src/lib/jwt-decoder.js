import { jwtDecode } from 'jwt-decode';

export const jwtDecoder = (jwt) => {
  const user = jwtDecode(jwt);
  return user;
};
