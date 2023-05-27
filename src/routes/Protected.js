import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
    if (!Cookies.get('jwt_token')) {
        return <Navigate to="/signin" replace />;
    }
    return children;
};
export default Protected;