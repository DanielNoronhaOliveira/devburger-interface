import { createBrowserRouter } from "react-router-dom";
import { UserProvider } from "../hooks/UserContext";

import { Login } from "../containers/Login";
import { Register } from '../containers/Register';
import { Home } from "../containers/Home";
import { Products } from "../containers/Products";

export const router = createBrowserRouter([
    
    {
       
        path: '/',
        element: <UserProvider>
                       <Home />
                 </UserProvider>,
      
    },
    {
       
        path: '/produtos',
        element: <UserProvider>
                       <Products />
                 </UserProvider>,
      
    },
    {
        path: '/login',
        element: <UserProvider>
                       <Login />
                 </UserProvider>,
    },
    {
        path: '/cadastro',
        element: <UserProvider>
                       <Register />
                 </UserProvider>,
    }

]);
