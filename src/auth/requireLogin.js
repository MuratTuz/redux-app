import { Navigate } from "react-router";
import { getTokenFromSessionStorage } from "../services/saveToken";

const RequireLogin = ({ token, children }) => {
  const storageToken = getTokenFromSessionStorage();
  if (storageToken !== "undefined" || token !== "") return children;
  else return <Navigate to="/login" />;
};
  

export default RequireLogin;
