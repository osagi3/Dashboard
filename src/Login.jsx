import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Login() {
  const navigate = useNavigate();
  return (
    <main>
      <form className="flex justify-between items-center md:gap-15 lg:gap-20 h-screen">
        <div className="flex flex-col lg:px-10 md:px-5 md:ml-10 lg:ml-60 md:w-200 w-full justify-center px-6">
          <label className="pb-2">Email</label>
          <input
            type="text"
            placeholder="Your email address"
            className="border-gray-300 border text-sm rounded-2xl py-3 px-3  mb-5 w-full justify-center flex"
          />
          <div className="flex flex-col">
            <label className="pb-2">Password</label>
            <input
              type="password"
              placeholder="Your password"
              className="border-gray-300 border text-sm  rounded-2xl py-3 px-3 w-full"
            />
          </div>
          <Button
            type="button"
            onClick={() => navigate("dashboard")}
            className="cursor-pointer p-2 bg-green-500 font-bold text-white rounded-2xl mt-6"
          >
            Login
          </Button>
        </div>

        <div className="bg-green-500 hidden md:block text-justify w-full h-screen ">
          <p className=" flex justify-center items-center h-screen text-white md:font-bold md:text-3xl lg:text-5xl lg:font-extrabold ">
            osa
          </p>
        </div>
      </form>
    </main>
  );
}

export default Login;
