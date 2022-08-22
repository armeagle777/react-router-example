import React, { useState } from 'react';
import { useAuth } from '../utils/auth';
import { useNavigate, useLocation } from 'react-router-dom';

export const Login = () => {
    const [loginValue, setLoginValue] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const navigateUrl = location.state?.path || '/';
    const inputHandler = (e) => {
        setLoginValue(e.target.value);
    };
    const loginSubmitHandler = () => {
        if (loginValue) {
            login(loginValue);
            navigate(navigateUrl, { replace: true });
        }
    };
    return (
        <div>
            <input type='text' value={loginValue} onChange={inputHandler} />
            <button onClick={loginSubmitHandler}>Login</button>
        </div>
    );
};
