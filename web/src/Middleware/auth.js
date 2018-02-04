export default function auth() {
  if (localStorage.getItem('access_token') === null) {
  	// TODO callback para comprobar que el token ha caducado
    return false;
  }
  return true;
};
