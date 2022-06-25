import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        window.alert("please Login to see profile page")
        return <Navigate to="/" replace />;
    }
    return children;
};
export default Protected;