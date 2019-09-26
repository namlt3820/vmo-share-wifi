// eslint-disable-next-line import/prefer-default-export
export function getToken(history) {
  const token = localStorage.getItem('access_token');
  if (token) {
    history.push('/dashboard');
  }
}
