import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({
  token,
  children,
  redirectTo = "/login",
  idCheckout,
}) => {
  if (!token) {
    // not logged in so redirect to login page with the return url
    return <Navigate to={redirectTo} />;
  }
  if (idCheckout !== "0") {
    return <Navigate to="/exitosa" />;
  }
  return <Outlet />;
};
