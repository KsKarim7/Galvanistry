import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading,] = useAuthState(auth);
    const [admin, aLoading] = useAdmin(user)
    const location = useLocation();

    if (loading || aLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        return <Navigate to='/login' state={{ form: location }} replace ></Navigate >
    }
    return children
};

export default RequireAdmin;