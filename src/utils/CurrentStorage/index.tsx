const currentStorage = (): Storage => {
  if (localStorage.getItem("valuesOfRememberMe") === "true")
    return localStorage;
  return sessionStorage;
};
export default currentStorage;
