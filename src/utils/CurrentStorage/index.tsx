const currentStorage = (): Storage => {
  // Remember me
  if (localStorage.getItem("valuesOfRememberMe") === "true")
    return localStorage;
  return sessionStorage;
};
export default currentStorage;
