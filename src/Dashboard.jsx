// import ArrowIcon from "./components/ArrowIcon";
// import ArrowDown from "./components/ArrowUp";
import Clients from "./components/Clients";
import MoneySvg from "./components/MoneySvg";

import Users from "./components/Users";
import NavBar from "./NavBar";
import StatCard from "./StatCard";

function Dashboard() {
  const usersToday = 5700;
  const totalRevenue = 100;
  const usersYesterday = 100;

  let todayGrowth = 0;

  if (usersYesterday != 0) {
    todayGrowth = (usersToday - usersYesterday) / usersYesterday;
  }

  todayGrowth = Math.round(todayGrowth * 10000) / 10000;

  return (
    <div className="flex bg-gray-300">
      <NavBar />
      <div className="flex gap-5 p-5">
        <StatCard
          label="Users"
          value={usersToday}
          icon={<Users color="white" className="w-7" />}
        />
        <StatCard
          label="Growth"
          value={todayGrowth}
          icon={<MoneySvg color="white" className="w-7" />}
        />
        <StatCard
          label="Revenue"
          value={totalRevenue}
          icon={<Clients color="white" className="w-7" />}
        />
      </div>
    </div>
  );
}

export default Dashboard;
