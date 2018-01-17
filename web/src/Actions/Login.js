export const Login = {
  _PENDING:'_PENDING',
  _SUCCESS:'_SUCCESS',
  _ERROR:'_ERROR',
};

export default function loginAction(email, password, callback) {
  setTimeout(() => {
    if (email === 'admin@example.com' && password === 'admin') {
      let token = 'abcdef'
      return callback(token);
    } else {
      return callback(false, new Error('Invalid email and password'));
    }
  }, 1000);
}