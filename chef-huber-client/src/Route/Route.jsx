import { createBrowserRouter } from "react-router-dom";
import Main from "../Root/Main";
import Home from "../Comonents/Home/Home";
import ChefDetails from "../Comonents/ChefDetails/ChefDetails";
import Menu from "../Comonents/Home/MenuSlider/Menu";
import Registration from "../LogRegister/Registration";
import Login from "../LogRegister/Login";
import OurChefs from "../Comonents/OurChefs/OurChefs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Setting from "../Comonents/Setting/setting";
import Blog from "../Comonents/Blog/Blog";
import ChefRegisterForm from "../Comonents/ChefRegister/ChefRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://chef-hunter-chefaos-hcvs6lpld-randomhabibur.vercel.app/chef/v1"
          ),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "/chefregister",
        element: <ChefRegisterForm />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "ourchefs",
        element: (
          <PrivateRoute>
            <OurChefs />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
      {
        path: "chefdetails/:chefid",
        element: <ChefDetails />,
        loader: ({ params }) =>
          fetch(
            `https://chef-hunter-chefaos-hcvs6lpld-randomhabibur.vercel.app/allchef/v1/chefid/${params.chefid}`
          ),
      },
      {
        path: "setting",
        element: (
          <PrivateRoute>
            <Setting />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
