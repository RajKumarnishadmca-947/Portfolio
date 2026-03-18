import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcotext } from "./Context";

const PrivateRoute = ({ children }) => {

  const { userData } = useContext(Authcotext);

  if (!userData) {
    return <Navigate to="/"/>;
  }

  return children;
};

export default PrivateRoute;