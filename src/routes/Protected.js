import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
    const cookies = new Cookies();
    if (!cookies.get('jwt_token')) {
        return <Navigate to="/signin" replace />;
    }
    return children;
};
export default Protected;