const validateUsername = (name: string): boolean => {
  const regex = /^[a-zA-Z0-9_]{3,20}$/;
  return !regex.test(name);
}

export { validateUsername };