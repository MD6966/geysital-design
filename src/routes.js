import { useRoutes } from "react-router-dom/dist";
import AuthLayout from "./layouts/Auth/AuthLayout";
import Home from "./layouts/Home";
import Landing from "./layouts/Landing/Landing";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Dashboard from './layouts/Home/Dashboard'
import ProtectedRoutes from "./ProtectedRoutes";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorBoundary/components/ErrorPage";
import { Navigate } from "react-router-dom/dist";


export default function Router() {
    const authState = useSelector((state) => state.auth.isAuthenticated)
    // console.log(authState)

    let element = useRoutes([
        {
        path:'/',
        element : <Landing /> ,
       },
       {
        path:'auth',
        element: <AuthLayout />, 
        children : [
            { path: 'login', element: <Login />},
            { path: 'register' , element: <SignUp /> }
        ]
       },
       {
        element : <ProtectedRoutes isLogged={authState} />,
        children: [
            {path:'home', element: <Home />},
            {path:'dashboard', element: <Dashboard /> },
            {
                element: () => <Navigate to='/error' /> 
               }
            
        ]
       },
      {
        path:'error',
        element: <ErrorPage /> 
      }
       
    ])
    return element
}