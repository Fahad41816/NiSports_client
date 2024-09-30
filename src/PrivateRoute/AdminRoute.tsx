/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux"
import { Navigate } from "react-router"


const AdminPrivateRoute = ({children} : any) => {
  
  const User = useSelector((state : any) => state.Auth.user)

  if(User.role == 'admin'){
      return children
  }


  return <Navigate to={'/login'} replace></Navigate>
}

export default AdminPrivateRoute