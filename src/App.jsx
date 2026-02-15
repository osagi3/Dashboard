import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./index.css";
import Login from "./Login";
import HomeSvg from "./components/HomeSvg";
import Profile from "./Profile";
import ArrowDown from "./components/ArrowUp";
import StatCard from "./StatCard";
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
  <HomeSvg />;
  <ArrowDown />;
  <StatCard />;
  return <RouterProvider router={router} />;
}

export default App;
