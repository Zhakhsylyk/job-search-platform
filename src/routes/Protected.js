import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
    if (!Cookies.get('jwt_token')) {
        return <Navigate to="/" replace />;
    }
    return children;
};
export default Protected;