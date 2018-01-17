import loginAction, { Login } from '../Actions/Login'

export function login(email, password) {
  return dispatch => {
    dispatch(setStatus(Login._PENDING));

    loginAction(email, password, (token, error) => {
      if (!error) {
        dispatch(setStatus(Login._SUCCESS, token, '2'));
      } else {
        dispatch(setStatus(Login._ERROR, false, error));
      }
    });
  }
}

function setStatus(type, token = false, error = '') {
  let status = {
    type: type,
    token: token,
    error: error,
  };
  return status;
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case Login._PENDING:
      return Object.assign({}, state, {
        type: action.type,
        token: false,
        error: '',
      });

    case Login._SUCCESS:
      return Object.assign({}, state, {
        type: action.type,
        token: action.token,
        error: '',
      });

    case Login._ERROR:
      return Object.assign({}, state, {
        type: action.type,
        token: false,
        error: action.error.message,
      });

    default:
      return state;
  }
}