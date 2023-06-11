import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import News from "../Pages/News/News";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../Pages/Shared/Others/TermsAndConditions";
import Profile from "../Pages/Shared/Others/Profile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home>, loader: () => fetch("http://localhost:5000/news") },
      { path: "/category/:id", element: <Category></Category>, loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`) },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/terms", element: <TermsAndConditions></TermsAndConditions> },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
