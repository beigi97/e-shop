import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home, { loader as homeLoader } from "./Home";
import ErrorPage from "../error-page/ErrorPage";

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
    ],
  },
]);
export default router;
