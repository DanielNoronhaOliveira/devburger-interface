import { createBrowserRouter } from "react-router-dom";
import { UserProvider } from "../hooks/UserContext";

import { Home, Products, Register, Login } from "../containers";


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
