import { useRoutes } from "react-router-dom/dist";
import AuthLayout from "./layouts/Auth/AuthLayout";
import Home from "./layouts/Home";
import Landing from "./layouts/Landing/Landing";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Dashboard from './layouts/Home/Dashboard'
import ProtectedRoutes from "./ProtectedRoutes";
import { useSelector } from "react-redux";



export default function Router() {
    const authState = useSelector((state) => state.rootReducer.auth.isAuthenticated)
    console.log(authState)

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
            {path:'dashboard', element: <Dashboard /> }
            
        ]
       }
       
    ])
    return element
}