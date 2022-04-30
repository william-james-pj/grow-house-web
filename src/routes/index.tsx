import { Routes, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';

import { Logged } from '../pages/Logged';
import { Home } from '../pages/Home';
import { MyPlats } from '../pages/MyPlants';
import { Discover } from '../pages/Discover';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/" element={<Logged />}>
        <Route index element={<Home />} />
        <Route path="/myplants" element={<MyPlats />} />
        <Route path="/discover" element={<Discover />} />
      </Route>
    </Routes>
  );
}
