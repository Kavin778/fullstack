import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";


const PrivateRoute = ({children}) =>{
    const token = localStorage.getItem("token");

    if(!token) return <Navigate to="/" replace/>;

    try{
        const decoded = jwtDecode(token);
        const currTime = Math.floor(Date.now()/1000);
        
        if(decoded.exp < currTime){
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            return <Navigate to="/" replace/>;
        }

        return children;
    }

    catch(err){
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        return <Navigate to="/" replace/>;
    }
}

export default PrivateRoute;