import { useNavigate } from "react-router-dom";
import Button from "./Button";
import HomeSvg from "./components/HomeSvg";
import PageSvg from "./components/PageSvg";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="flex-col p-10">
      <ul className="mb-10">
        <li className="font-bold">
          <Button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="pb-5 flex items-center gap-1 cursor-pointer"
          >
            <div className="bg-green-500 p-2 rounded-xl">
              <HomeSvg color={"white"} className="w-4   bg-green-500 " />
            </div>
            Dashboard
          </Button>
        </li>
        <li className="font-bold">
          <Button
            type="button"
            onClick={() => navigate("/profile")}
            className="pb-5  flex items-center gap-1 cursor-pointer"
          >
            <div className="bg-green-500 p-2 rounded-xl">
              <PageSvg color={"white"} className="w-4 green-500 " />
            </div>
            Profile
          </Button>
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
