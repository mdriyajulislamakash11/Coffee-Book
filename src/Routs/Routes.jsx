import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts.jsx";
import Home from "../Pages/Home.jsx";
import Coffees from "../Pages/Coffees.jsx";
import Dashboard from "../Pages/Dashboard.jsx";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/coffees',
            element: <Coffees />
        },

        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>

        },
        
      ]
    },
  ]);
export default routes;