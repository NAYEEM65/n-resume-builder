import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AuthRoute = ({ children }) => {
  const auth = useAuth();

  return !auth ? children : <Navigate to="/profile" />;
};


export default AuthRoute;
