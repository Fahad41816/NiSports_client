/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const UserPrivateRoute = ({ children }: any) => {
  const User = useSelector((state: any) => state.Auth.user);

  if (User.role == "user") {
    return children;
  }

  return <Navigate to={"/login"} replace></Navigate>;
};

export default UserPrivateRoute;
