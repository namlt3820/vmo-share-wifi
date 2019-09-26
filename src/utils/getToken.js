function getToken(history) {
  const token = localStorage.getItem('access_token');
  if (token) {
    history.push('/dashboard');
  }
}

export default { getToken };
