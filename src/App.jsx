import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users';
import NewProducts from './components/NewProducts';
import FeaturedProducts from './components/FeaturedProducts';
import Navbar from './components/Navbar';
import UserDetails from './pages/UserDetails';
import Admin from './pages/Admin';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { RequireAuth } from './components/RequireAuth';

function App() {
    const LazyAbout = React.lazy(() => import('./pages/About'));
    return (
        <div className='App'>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='login' element={<Login />} />
                    <Route
                        path='profile'
                        element={
                            <RequireAuth>
                                <Profile />
                            </RequireAuth>
                        }
                    />
                    <Route path='/' element={<Home />} />
                    <Route
                        path='about'
                        element={
                            <React.Suspense fallback='Loading'>
                                <LazyAbout />
                            </React.Suspense>
                        }
                    />
                    <Route path='products' element={<Products />}>
                        <Route path='new' element={<NewProducts />} />
                        <Route
                            path='feautered'
                            element={<FeaturedProducts />}
                        />
                    </Route>
                    <Route path='users' element={<Users />}>
                        <Route path=':userId' element={<UserDetails />} />
                        <Route path='admin' element={<Admin />} />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
