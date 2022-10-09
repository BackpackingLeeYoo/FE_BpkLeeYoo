import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import isLogin from "../utils/isLogin";

interface PrivateRouteProps {
  children: ReactElement;
}
const PrivateRoute = ({ children }: PrivateRouteProps): React.ReactElement | null => {
  if (!isLogin) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute;
