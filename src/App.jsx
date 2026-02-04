import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./index.css";
import Login from "./Login";
import NavBar from "./NavBar";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/navbar", element: <NavBar /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
