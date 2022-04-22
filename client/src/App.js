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

function App() {
  const user = {
    isConnected: true,
    role: "USER",
  };
  return (
    <BrowserRouter>
      <div class="bg-light" style={{ height: "100vh" }}>
        <NavBar />
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
