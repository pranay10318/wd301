import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./NotFound";
import Signup from "./pages/signup";
// Dialogue 1: First, we've to import the Signin component
import Signin from "./pages/signin";
import { ProtectedRoute } from "./ProtectedRoute";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        {/* tried to keep exact with makes the url matching exactly  but its givin' error */}
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        {/* Dialogue 2: Then we will add route for signin path and render Signin page there */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
      </Routes>
    </div>
  );
};
export default App;
