import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="flex-col p-10">
      <ul>
        <li className="pb-5">
          <Link>Dashboard</Link>
        </li>
        <li>
          <Link>profile</Link>
        </li>
      </ul>

      <Button
        className="cursor-pointer px-5 py-2 bg-green-500 text-white font-bold rounded-2xl "
        type="button"
        onClick={() => navigate("/")}
      >
        Sign out
      </Button>
    </div>
  );
}

export default NavBar;
