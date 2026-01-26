import Home from "./features/Home/Home.jsx";
import Layout from "./ui/Layout.jsx";
import AboutUs from "./features/About/AboutUs.jsx";
import Delivery from "./features/Delivery/Delivery.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "delivery",
        element: <Delivery />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
