import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { userId } = useParams();
    return <div>UserDetails Of user N {userId}</div>;
};

export default UserDetails;
