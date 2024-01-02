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
import MyAccount from "../pages/Dashboard/Account/MyAccount";
import AddBlog from "../pages/Dashboard/Blog/AddBlog";
import AddResearch from "../pages/Dashboard/Research/AddResearch";
import Blog from "../components/home/Blog";
import SingleResearch from "../pages/Home/Research/SingleResearch/SingleResearch";

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
        path: "/blog",
        element: <Blog></Blog>,
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
        path: "/research/:id",
        element: <SingleResearch></SingleResearch>,
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
      {
        path: "myaccount",
        element: <MyAccount></MyAccount>,
      },
      {
        path: "addblog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "addblog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "addresearch",
        element: <AddResearch></AddResearch>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
