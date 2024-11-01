import { createBrowserRouter } from "react-router-dom";
//import { UserProvider } from "../hooks/UserContext";

import { Home, Menu, Register, Login, Cart, CompletePayment, Checkout, Admin } from "../containers";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import paths from "../constants/paths";


export const router = createBrowserRouter([

    {

        path: '/',
        element: (
            <>
                <Header />
                <Home />
                <Footer/>
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

    },
    {
        path: '/checkout',
        element:
            <Checkout />,
    },
    {
        path: '/complete',
        element:
            <CompletePayment />

    },
    {
        path: (paths.Order) ,
        element:
            <Admin />

    },
    {
        path: (paths.Products) ,
        element:
            <Admin />

    },
    {
        path: (paths.NewProduct) ,
        element:
            <Admin />

    },
   


]);
