export default function auth() {
  if (localStorage.getItem('auth') === null) {
    return false;
  }
  return true;
};
