import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginRequest, logout } from '../store/authSlice';

function AuthComponent() {
  const { user, isVerified, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginRequest({ email: 'test@example.com', password: '1234' }));
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {user ? (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AuthComponent;