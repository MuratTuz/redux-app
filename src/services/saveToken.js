export const saveTokenToSessionStorage = (token) => {
  sessionStorage.setItem("myTwitterToken", token.accessToken);
};

export const getTokenFromSessionStorage = () => {
  return sessionStorage.getItem("myTwitterToken");
};
