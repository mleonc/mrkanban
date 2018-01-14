export const Login = {
  _PENDING: 'PENDING',
  _SUCCESS: 'SUCCESS',
  _ERROR:   'ERROR'
}

export function login(email, password) {
  return dispatch => {
    dispatch(setStatus(Login._PENDING));

    callLoginApi(email, password, error => {
      if (!error) {
        dispatch(setStatus(Login._SUCCESS));
      } else {
        dispatch(setStatus(Login._ERROR, error));
      }
    });
  }
}

function setStatus(type, error = null) {
  return {
    type: type,
    error
  };
}

function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === 'admin@example.com' && password === 'admin') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
}

export default function reducerLogin(
  state = { status: Login._PENDING, error: null }, 
  action) {
    return Object.assign({}, state, {
      status: action.type,
      error:  action.error
    });
}