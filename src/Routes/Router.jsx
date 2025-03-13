import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout/RootLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <h3>this is home</h3>,
      },
      {
        path: "/events",
        element: <h3>this is event page</h3>,
      },
      {
        path: "/about",
        element: <h3>this is about page</h3>,
      },
    ],
  },
]);

export default Router;
