import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home, { loader as homeLoader } from "./Home";
import ErrorPage from "../error-page/ErrorPage";
<<<<<<< HEAD
import About from "./AboutUs";
=======
import Contact from "./Contact";
>>>>>>> feat/contact

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
<<<<<<< HEAD
      { path: "/about", element: <About /> },
=======

      { path: "/contact", element: <Contact /> },
>>>>>>> feat/contact
    ],
  },
]);
export default router;
