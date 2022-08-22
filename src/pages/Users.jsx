import React, { useMemo } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const users = [
        { id: 1, userName: 'abc', isActive: false },
        { id: 2, userName: 'dsa', isActive: true },
        { id: 3, userName: 'fdas', isActive: false },
        { id: 4, userName: 'ggg', isActive: true },
        { id: 5, userName: 'ddd', isActive: true },
    ];

    const showActiveUsers = searchParams.get('filter') === 'active';

    const filterHandler = () => {
        setSearchParams({ filter: 'active' });
    };
    const resetHandler = () => {
        setSearchParams({});
    };
    return (
        <>
            <h3>Users Page</h3>
            <div className='users-container'>
                {users.map((user) => (
                    <Link key={user.id} to={`${user.id}`}>
                        {user.userName}
                    </Link>
                ))}
                <Link to='admin'>Admin</Link>
            </div>

            <div>
                <button onClick={filterHandler}>Show Active</button>
                <button onClick={resetHandler}>Reset Filter</button>
            </div>
            <hr />
            <div>
                {showActiveUsers ? (
                    <span>Showing filtered users</span>
                ) : (
                    <span>Showing all users</span>
                )}
            </div>
            <Outlet />
        </>
    );
};

export default Users;
