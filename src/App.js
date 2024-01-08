import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';

const App = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>);
}

const appRouter = createBrowserRouter([
    { path: "/", element: <App />, errorElement: <Error /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={appRouter} />
);