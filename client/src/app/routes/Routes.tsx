import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: '/catalog', element: <Catalog /> },
            { path: '/catalog/:id', element: <ProductDetails /> },
            { path: '/about', element: <AboutPage /> },
            { path: '/contact', element: <ContactPage /> },
            { path: '/basket', element: <BasketPage /> },
            { path: '/server-error', element: <ServerError /> },
            { path: '/not-found', element: <NotFound /> },
            { path: '/checkout', element: <CheckoutPage /> },
            { path: '*', element: <NotFound /> } // Catch-all for 404 Not Found}

        ]
    }
])