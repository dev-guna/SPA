import React ,{ useContext } from "react";
import AuthContext from "../context/authContext";
import { useNavigate } from "react-router-dom";

function PrivateRouteCheck({ children }) {
    const  {setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

  React.useEffect(() => {
    
    let IniState = {};

    if(localStorage.getItem("user") && localStorage.getItem("user") != null){
      IniState = JSON.parse(localStorage.getItem("user"));
      setAuth(IniState);
    }else{
      navigate('/login')
    }
  },[]);

    return  <React.Suspense fallback={<>...</>}>{children}</React.Suspense> ;
  }

function PublicRouteCheck({ children }) {
  const  {setAuth} = useContext(AuthContext);
  const navigate = useNavigate();

React.useEffect(() => {
  let IniState = {};
  if(localStorage.getItem("user") && localStorage.getItem("user") != null){
    IniState = JSON.parse(localStorage.getItem("user"));
    setAuth(IniState);
    navigate('/dashboard')
  }
},[]);

  return  <React.Suspense fallback={<>...</>}>{children}</React.Suspense> ;
}
 
export {PrivateRouteCheck,PublicRouteCheck};