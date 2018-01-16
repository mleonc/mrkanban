import loginAction, { Login } from '../Actions/Login'

export function login(email, password) {
  return dispatch => {
    dispatch(setStatus(Login._PENDING));

    loginAction(email, password, error => {
      if (!error) {
        dispatch(setStatus(Login._SUCCESS));
      } else {
        dispatch(setStatus(Login._ERROR, error));
      }
    });
  }
}

function setStatus(type, error = '') {
  return {
    type: type,
    error: error,
  }
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case Login._PENDING:
      return Object.assign({}, state, {
        status: action.type,
        error: '',
      });

    case Login._SUCCESS:
      return Object.assign({}, state, {
        status: action.type,
        error: '',
      });

    case Login._ERROR:
      return Object.assign({}, state, {
        status: action.type,
        error: action.error.message,
      });

    default:
      return state;
  }
}