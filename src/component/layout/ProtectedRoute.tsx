import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/featurs/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}: {children:ReactNode}) => {
    const token = useAppSelector(useCurrentToken)

    if(!token) {
        return <Navigate to={'/login'}></Navigate>
    }

    return children
};

export default ProtectedRoute;