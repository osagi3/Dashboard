import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-200">
      <NavBar />
      <div className="flex-1 p-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
