import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('signOut successfully');
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const location = useLocation();
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/services'}>Services</Link>
            </li>
            <li>
              <Link to={'/profile'}>My Profile</Link>
            </li>
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-xl">
          WarmPaws
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/services'}>Services</Link>
          </li>
          {user ? (
            <li>
              <Link to={'/profile'}>My Profile</Link>
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-hover mr-4">
            <div tabIndex={0} role="button" className=" m-1">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2 cursor-pointer">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>{user?.displayName}</a>
              </li>
            </ul>
          </div>
        ) : (
          ''
        )}

        {user ? (
          <button onClick={handleLogout} className="btn">
            LogOut
          </button>
        ) : location.pathname === '/login' ? (
          <Link to="/register" className="btn">
            Sign Up
          </Link>
        ) : location.pathname === '/register' ? (
          <Link to="/login" className="btn">
            Login
          </Link>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
