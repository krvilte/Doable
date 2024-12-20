import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Settings from "./pages/settings";
import Board from "./pages/board";
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
