import { createBrowserRouter } from "react-router-dom";
import { UserProvider } from "../hooks/UserContext";

import { Home, Menu, Register, Login, Cart } from "../containers";


export const router = createBrowserRouter([
    
    {
       
        path: '/',
        element: <UserProvider>
                       <Home />
                 </UserProvider>,
      
    },
    {
       
        path: '/cardapio',
        element: <UserProvider>
                       <Menu />
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
    },
    {
        path: '/carrinho',
        element: <UserProvider>
                       <Cart />
                 </UserProvider>,
    }

]);
