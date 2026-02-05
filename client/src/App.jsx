import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Delivery from "./pages/Delivery";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Calculator from "./pages/Calculator";
import Order from "./pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
      {
        path: "calculator",
        element: <Calculator />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
