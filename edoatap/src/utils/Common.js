import base64 from 'base-64';

export const getToken = () => {
    return localStorage.getItem('token') || null;
  };

export const decodeToken = () => {

  const parts = getToken().split('.');
  let decodedToken = base64.decode(parts[1]);
  decodedToken = JSON.parse(decodedToken);
  return decodedToken

}