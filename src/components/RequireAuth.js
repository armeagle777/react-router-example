import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/auth';

export const RequireAuth = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' state={{ path: location.pathname }} />;
    }
    return <div>{children}</div>;
};
