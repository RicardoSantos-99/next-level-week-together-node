const validatePassword = (password: string): boolean => {
  if (password.length < 8) {
    return false;
  }
  if (password.length > 20) {
    return false;
  }
  if (password.search(/[a-z]/) < 0) {
    return false;
  }
  if (password.search(/[A-Z]/) < 0) {
    return false;
  }
  if (password.search(/[0-9]/) < 0) {
    return false;
  }
  return password.search(/[^a-zA-Z0-9]/) >= 0;

};

export { validatePassword };