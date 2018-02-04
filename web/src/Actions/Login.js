export const Login = {
  _PENDING:'_PENDING',
  _SUCCESS:'_SUCCESS',
  _ERROR:'_ERROR',
};

export default function loginAction(email, password, callback) {
  fetch('http://localhost.mrkanban/mrk/api/login',
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: email,
      password: password,
    })
  }).then(response => {
    return response.json();
  }).then(json => {
    let { user_id, access_token, expires_in, error } = json;
    if (typeof error !== "undefined") {
      return callback(false, new Error(json['error']));
    }
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('user_id', user_id);
    localStorage.setItem('expires_in', expires_in);
    return callback(access_token);
  });
}