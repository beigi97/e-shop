import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Home, { loader as homeLoader } from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
