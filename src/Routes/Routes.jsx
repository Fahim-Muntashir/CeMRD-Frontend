import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Events from "../pages/Home/Events/Events";
import Team from "../pages/Home/Team/Team";
import Research from "../pages/Home/Research/Research";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ManageUser from "../pages/Dashboard/ManageUser";
import Contact from "../pages/Home/Contact/Contact";
import NotFound from "../components/shared/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/team",
        element: <Team></Team>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/research",
        element: (
          <PrivateRoute>
            <Research></Research>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "users",
        element: <ManageUser></ManageUser>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
