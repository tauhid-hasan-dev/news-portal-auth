import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

/*
1- only allow authenticated user to visit the route
2- 
3-

*/

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    let location = useLocation();
    if(!user){
        return <Navigate to ='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRoute;