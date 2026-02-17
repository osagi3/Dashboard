import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./index.css";
import Login from "./Login";
import Profile from "./Profile";
import Layout from "./Layout";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },

  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
