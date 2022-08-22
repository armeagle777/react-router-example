import React from 'react';
import { useAuth } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const logoutHandler = () => {
        logout();
        navigate('/');
    };
    return (
        <div>
            Welcome to Profile page User {user}
            <br />
            <button onClick={logoutHandler}>Logout</button>
        </div>
    );
};
