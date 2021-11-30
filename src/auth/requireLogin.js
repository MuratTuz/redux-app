import { Navigate } from "react-router";

const RequireLogin = ({ token, children }) => {
  console.log("does it has token ", token);
  console.log(" children ", children);
  if (token === "") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireLogin;
