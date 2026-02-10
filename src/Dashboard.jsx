import ArrowIcon from "./components/ArrowIcon";
import ArrowDown from "./components/ArrowUp";
import Clients from "./components/Clients";
import MoneySvg from "./components/MoneySvg";

import Users from "./components/Users";
import NavBar from "./NavBar";
import StatCard from "./StatCard";

function Dashboard() {
  const usersToday = 500;
  const totalRevenue = 100;
  const usersYesterday = 300;

  const todayGrowth = usersToday - usersYesterday;

  return (
    <div className="flex bg-gray-200">
      <NavBar />
      <div className="flex gap-5 p-5 ">
        <div className="bg-white flex justify-between p-4 w-50 h-20 rounded-2xl">
          <div>
            <p className="text-gray-400 font-bold">
              {<StatCard label="Users" />}
            </p>
            <p className="font-bold">{<StatCard value={usersToday} />}</p>
          </div>
          <div className="bg-green-500 p-2 flex items-center rounded-xl">
            <MoneySvg color={"white"} className="w-7 green-500 " />
          </div>
        </div>
        <div className="bg-white flex justify-between p-4 w-50 h-20 rounded-2xl">
          <div>
            <p className="text-gray-400 font-bold">
              {<StatCard label="Growth" />}
            </p>
            <p className="font-bold">{<StatCard value={todayGrowth} />}</p>
            <div className="flex">
              {/* <p className="font-bold">chat</p> */}
              {/* <ArrowDown color={"green"} className="w-5" /> */}
            </div>
          </div>
          <div className="bg-green-500 p-2 flex items-center rounded-xl">
            <Users color={"white"} className="w-7 green-500 " />
          </div>
        </div>
        <div className="bg-white flex justify-between p-4 w-50 h-20 rounded-2xl">
          <div>
            <p className="text-gray-400 font-bold">
              {<StatCard label="Revenue" />}
            </p>
            <p className="font-bold">{<StatCard value={totalRevenue} />}</p>

            <div className="flex">
              {/* <ArrowIcon color={"red"} className="w-5" /> */}
            </div>
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
