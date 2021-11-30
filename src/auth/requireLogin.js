import { Navigate } from "react-router";

const RequireLogin = ({ token, children }) =>
  token === "" ? <Navigate to="/login" /> : children;

export default RequireLogin;
