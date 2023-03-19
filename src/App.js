import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cam from "./components/Cam";
import Cam2 from './components/Cam2';
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cam" element={<Cam />} />
          <Route path="cam2/:roomId" element={<Cam2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
