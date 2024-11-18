import Loading from "../../components/Shared/Loading";
import useAuth from "../../hooks/useAuth"
import { Navigate, useLocation } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const PrivateRoute = ( { children } ) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (user ) {
        return children
    }

  return <Navigate to="/" state={{from: location}} replace />
}

export default PrivateRoute