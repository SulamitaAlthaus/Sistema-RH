export const TOKEN_KEY = "@sistema-rh";
export const COMPANY = "@companyId";
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const login = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(COMPANY, user.companyId);
};
export const logout = () => {
  localStorage.removeItem("@sistema-rh");
  window.location.replace('/')
};