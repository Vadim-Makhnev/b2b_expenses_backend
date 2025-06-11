import { Navigate } from 'react-router-dom';
import { useUserStore } from '../store/useUserStore';
import type { JSX } from 'react';

interface PrivateRouteProps {
  children: JSX.Element;
  roles?: string[];
}

export function PrivateRoute({ children, roles = [] }: PrivateRouteProps) {
  const { user } = useUserStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roles.length && user.role && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
