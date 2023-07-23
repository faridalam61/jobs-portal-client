import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home";
import Contact from "../Pages/Contact/Contact";
import NotFound from "../Pages/NotFound/NotFound";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default Routers;
