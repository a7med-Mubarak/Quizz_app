import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./modules/Shared/Components/AuthLayout/AuthLayout";
import MasterLayout from "./modules/Shared/Components/MasterLayout/MasterLayout";
import ProtectedRoutes from "./modules/Shared/Components/ProtectedRoutes/ProtectedRoutes";
import NotFound from "./modules/Shared/Components/NotFound/NotFound";
import Quizzes from "./modules/Users/Components/Quizzes/Quizzes";
import Groups from "./modules/Users/Components/Groups/Groups";
import Results from "./modules/Users/Components/Results/Results";
import Login from "./modules/AUTH/Login/Login";
import Register from "./modules/AUTH/Register/Register";
import ChangePass from "./modules/AUTH/ChangePass/ChangePass";
import ForgetPass from "./modules/AUTH/ForgetPass/ForgetPass";
import RestPass from "./modules/AUTH/RestPass/RestPass";
import Dashboard from "./modules/Users/Components/Dashboard/Dashboard";

function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        { path: "login", element: <Login /> },
        { path: "Register", element: <Register /> },
        { path: "ChangePass", element: <ChangePass /> },
        { path: "ForgetPass", element: <ForgetPass /> },
        { path: "RestPass", element: <RestPass /> },
      ],
    },
    {
      path: "",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        { path: "", element: <Dashboard /> },
        { path: "Quizzes", element: <Quizzes /> },
        { path: "Groups", element: <Groups /> },
        { path: "Results", element: <Results /> },
      ],
    },
    {
      path: "dashboard",
      element: (
        <ProtectedRoutes>
          <MasterLayout />
        </ProtectedRoutes>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
