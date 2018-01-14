export function action() {
  return dispatch => {
    dispatch(setStatus());
  }
}

function setStatus() {
  return {
    type: type,
    error
  };
}

export default function reducerForm(
  state = { status: Login._PENDING, error: null }, 
  action) {
    return Object.assign({}, state, {
      status: action.type,
      error:  action.error
    });
}