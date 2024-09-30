/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux"
import { Navigate } from "react-router"


const PrivateRoute = ({children} : any) => {
  
  const User = useSelector((state : any) => state.Auth.user)

  if(User){
      return children
  }


  return <Navigate to={'/login'} replace></Navigate>
}

export default PrivateRoute