import { Routes, Route } from "react-router-dom";
import { Login } from "@/pages/Login";
import { MyAccount } from "@/pages/MyAccount";
import { Lessons } from "@/pages/Lessons";
import "./App.css";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AuthProvider } from "@/hooks/UseAuth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Lessons/>
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/minha-conta"
          element={
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;