import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./index.css";
import Login from "./Login";
import NavBar from "./NavBar";
import HomeSvg from "./components/HomeSvg";
import Profile from "./Profile";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/navbar", element: <NavBar /> },
  { path: "/profile", element: <Profile /> },
]);

function App() {
  <HomeSvg />;
  return <RouterProvider router={router} />;
}

export default App;
