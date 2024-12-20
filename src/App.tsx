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
import { StorePolicies } from "@/pages/StorePolicies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { AddLesson } from "@/pages/Admin/AddEntity/AddLesson";
import { AddClass } from "@/pages/Admin/AddEntity/AddClass";
import { AddInstructor } from "@/pages/Admin/AddEntity/AddInstructor";

function App() {
  return (
    <>
    <ToastContainer/>
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
        <Route path="/politicas-da-loja" element={<StorePolicies />} />
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
        <Route
          path="/admin/add-lesson"
          element={
            <ProtectedRoute userRole={['admin']}>
              <AddLesson />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-class"
          element={
            <ProtectedRoute userRole={['admin']}>
              <AddClass />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-instructor"
          element={
            <ProtectedRoute userRole={['admin']}>
              <AddInstructor />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;