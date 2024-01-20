import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Body';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import RestaurantMenu from './pages/RestaurantMenu';
import { UserProvider } from './utils/context/UserContext';
const Grocery = lazy(() => import("./pages/Grocery"));

const AppLayout = () => {

    return (
        <UserProvider>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserProvider>);
}

const appRouter = createBrowserRouter([
    {
        path: "/", element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path: "restaurants/:resId", element: <RestaurantMenu /> },
            {
                path: "grocery",
                element: <Suspense fallback={<h1>Page is loading... </h1>}>
                    <Grocery />
                </Suspense>
            }
        ],
        errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={appRouter} />
);