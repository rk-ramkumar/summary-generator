export const inputBoxStyle = {
  borderRadius: "6px",
  fontSize: "17px",
  padding: "14px 16px",
  width: "330px",
  border: "none",
  outline: "none",
};

export const endPoints = {
  "login": `${import.meta.env.VITE_API_URL}/login/`,
  "register": `${import.meta.env.VITE_API_URL}/register/`
}

export const loginCN = import.meta.env.VITE_LOGIN_COOKIE_NAME