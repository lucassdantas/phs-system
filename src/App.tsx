import { Routes, Route } from "react-router-dom";
import { Login } from "@/pages/Login";
import { MyAccount } from "@/pages/MyAccount";
import { Lessons } from "@/pages/Lessons";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AuthProvider } from "@/hooks/UseAuth";
import { Policy } from "@/pages/Policy";
import { Terms } from "@/pages/Terms";
import { Admin } from "@/pages/Admin";
import { Checkout } from "@/pages/Checkout";
import "./App.css";

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
        <Route 
          path="/aulas" 
          element={
            <ProtectedRoute>
              <Lessons/>
            </ProtectedRoute>
          } 
        />
        <Route path="/login"    element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/politica-de-privacidade" element={<Policy />} />
        <Route path="/termos-de-uso" element={<Terms />} />
        <Route
          path="/minha-conta"
          element={
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute userRole={['admin']}>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;