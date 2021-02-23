const setToken = (user) => {
  const token = `Bearer ${user.token}`;
  return token;
};

export { setToken };
