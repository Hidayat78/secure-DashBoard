import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const RequireAuth: React.FC<Props> = ({ children }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
