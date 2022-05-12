import React from "react";
import Admin from "./pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import AccessDenied from "./pages/AccessDenied";
import PrivateRouter from "./components/PrivateRouter";
import AdminRouter from "./components/AdminRouter";
import ForceRedirect from "./components/ForceRedirect";
import { Logout, setUser } from "./redux/actions/authActions";
import jwt_decode from "jwt-decode";
import store from "./redux/store";
import { useSelector } from "react-redux";
import { setAuth } from './util/setAuth';

if (window.localStorage.jwt) {
  const decode = jwt_decode(localStorage.jwt);
  store.dispatch(setUser(decode));
  setAuth(window.localStorage.jwt)
  const currentDate = Date.now / 1000;
  if (decode.exp >= currentDate) {
  store.dipatch(Logout())
  }
}

function App() {
  const auth = useSelector((state) => state.auth);
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role,
  };
  return (
    <BrowserRouter>
      <div className="bg-light" style={{ height: "100vh" }}>
        <NavBar user={user} />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRouter user={user}>
                <Profile />
              </PrivateRouter>
            }
          />
          <Route
            path="login"
            element={
              <ForceRedirect user={user}>
                <Login />
              </ForceRedirect>
            }
          />
          <Route
            path="/register"
            element={
              <ForceRedirect user={user}>
                <Register />
              </ForceRedirect>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminRouter user={user}>
                <Admin />
              </AdminRouter>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/access_denied" element={<AccessDenied />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
