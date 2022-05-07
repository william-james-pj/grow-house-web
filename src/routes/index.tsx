import { Routes, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { useAuth } from '../hooks/useAuth';

import { Logged } from '../pages/Logged';
import { Home } from '../pages/Home';
import { MyPlats } from '../pages/MyPlants';
import { Discover } from '../pages/Discover';
import { PrivateRoute } from './PrivateRouter';
import { Loading } from '../Components/Loading';

export function MainRoutes() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<PrivateRoute isLogged={user ? true : false} />}>
        <Route path="/" element={<Logged />}>
          <Route index element={<Home />} />
          <Route path="/myplants" element={<MyPlats />} />
          <Route path="/discover" element={<Discover />} />
        </Route>
      </Route>
    </Routes>
  );
}
