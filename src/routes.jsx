import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import Board from "./pages/board";
import Tasks from "./pages/tasks";
import RequireAuth from "./components/requireAuth";

const router = createBrowserRouter([
  {
    element: <RequireAuth />,
    errorElement: <Error />,
    children: [
      {
        path: "board",
        errorElement: <Error />,
        element: <Board />,
      },
      {
        path: "tasks",
        errorElement: <Error />,
        element: <Tasks />,
      },
      {
        path: "profile",
        errorElement: <Error />,
        element: <Profile />,
      },
      {
        path: "settings",
        errorElement: <Error />,
        element: <Settings />,
      },
    ],
  },
  {
    path: "/",
    errorElement: <Error />,
    element: <Home />,
  },
  {
    path: "login",
    errorElement: <Error />,
    element: <Login />,
  },
  {
    path: "signup",
    errorElement: <Error />,
    element: <Signup />,
  },
]);

export default router;
