import { useContext } from "react"
import { UserContext } from "../context/UserProvider";
import { Navigate, useLocation } from "react-router-dom";

const VerificarUsuario = (props) => {

    const {user} = useContext(UserContext)

    let location = useLocation()
    

    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace/>;
    } else {
        return props.children
    }
}
export default VerificarUsuario;