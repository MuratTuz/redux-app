import { Navigate } from "react-router";
//import { getTokenFromSessionStorage } from "../services/saveToken";

const RequireLogin = ( { token, children } ) => ( token === "" ? <Navigate to="/login" /> : children );
  

export default RequireLogin;
