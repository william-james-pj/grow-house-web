import { Navigate, Outlet } from 'react-router';

type PrivateRouteProps = {
  isLogged: boolean;
};

export const PrivateRoute = ({ isLogged }: PrivateRouteProps) => {
  if (!isLogged) {
    return <Navigate to={'/login'} replace />;
  }

  return <Outlet />;
};
