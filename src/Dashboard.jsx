import Clients from "./components/Clients";
import MoneySvg from "./components/MoneySvg";

import Users from "./components/Users";
import NavBar from "./NavBar";

function Dashboard() {
  return (
    <div className="flex bg-gray-200">
      <NavBar />
      <div className="flex gap-5 p-5 ">
        <div className="bg-white flex justify-between p-4 w-50 h-20 rounded-2xl">
          <div>
            <p className="text-gray-400 font-bold">Users</p>
            <p className="font-bold">chat</p>
          </div>
          <div className="bg-green-500 p-2 flex items-center rounded-xl">
            <MoneySvg color={"white"} className="w-7 green-500 " />
          </div>
        </div>
        <div className="bg-white flex justify-between p-4 w-50 h-20 rounded-2xl">
          <div>
            <p className="text-gray-400 font-bold">Growth</p>
            <p className="font-bold">chat</p>
          </div>
          <div className="bg-green-500 p-2 flex items-center rounded-xl">
            <Users color={"white"} className="w-7 green-500 " />
          </div>
        </div>
        <div className="bg-white flex justify-between p-4 w-50 h-20 rounded-2xl">
          <div>
            <p className="text-gray-400 font-bold">Revenue</p>
            <p className="font-bold">+3,020</p>
          </div>
          <div className="bg-green-500 p-2 flex items-center rounded-xl">
            <Clients color={"white"} className="w-7 green-500 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
