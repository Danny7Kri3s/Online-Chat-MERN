import { 
  createBrowserRouter, 
  Navigate, 
  RouterProvider 
} from "react-router-dom"
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import { useAuthContext } from "./context/AuthContext";

const Router: React.FC = () => {
  const {authUser} = useAuthContext();

  const config = createBrowserRouter([
    {
      path: "/",
      element: authUser ? <Navigate to="/home" replace/> : <Login />
    },
    {
      path: "home",
      element: authUser ? <Home/> : <Navigate to="/" replace />
    },
    {
      path: "register",
      element: authUser ? <Navigate to="/home"  replace/> : <SignUp /> 
    }
  ]);

  return <RouterProvider router={config} />
}

export default Router;