const validateUsername = (name: string): boolean => {
  const regex = /^[a-zA-Z0-9_]{3,20}$/;
  console.log(regex.test(name))

  return !regex.test(name);
}

export { validateUsername };