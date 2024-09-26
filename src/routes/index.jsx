import { createBrowserRouter } from "react-router-dom";
//import { UserProvider } from "../hooks/UserContext";

import { Home, Menu, Register, Login, Cart } from "../containers";
import { Header } from "../components/Header";


export const router = createBrowserRouter([

    {

        path: '/',
        element: (
            <>
                <Header />
                <Home />
            </>
        ),

    },
    {

        path: '/cardapio',
        element:
            <Menu />,
     },
    {
        path: '/login',
        element:
            <Login />,
    },
    {
        path: '/cadastro',
        element:
            <Register />,
    },
    {
        path: '/carrinho',
        element:
            <Cart />

    }

]);
