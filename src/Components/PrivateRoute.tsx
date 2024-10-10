import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../AuthContext';

const PrivateRoute: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (authContext) {
      setShouldRedirect(!authContext.isAuthenticated);
    }
  }, [authContext]);

  if (!authContext) {
    return <Navigate to="/signin" />;
  }

  return shouldRedirect ? <Navigate to="/signin" /> : <Outlet />;
};

export default PrivateRoute;
