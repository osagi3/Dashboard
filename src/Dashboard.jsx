import { useEffect, useState } from "react";
import StatCard from "./StatCard";
import { getDashboardData } from "./ApiBox";

import Users from "./components/Users";
import Clients from "./components/Clients";
import MoneySvg from "./components/MoneySvg";

function Dashboard() {
  const [usersToday, setUsersToday] = useState(0);
  const [usersYesterday, setUsersYesterday] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getDashboardData();

        setUsersToday(data.usersToday);
        setUsersYesterday(data.usersYesterday);
        setTotalRevenue(data.totalRevenue);
      } catch (err) {
        console.error("Fetch failed:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  let todayGrowth = 0;
  if (usersYesterday !== 0) {
    todayGrowth = ((usersToday - usersYesterday) / usersYesterday) * 100;
  }
  todayGrowth = Math.round(todayGrowth);

  const formattedGrowth = `${todayGrowth}%`;

  if (isLoading) {
    return <div className="p-10 text-xl font-bold">Loading dashboard...</div>;
  }

  return (
    <div className="flex bg-gray-200 min-h-screen">
      <div className="flex gap-5 p-5">
        <StatCard
          label="Users"
          value={usersToday}
          icon={<Users color="white" className="w-7" />}
        />

        <StatCard
          label="Growth"
          value={todayGrowth}
          displayValue={formattedGrowth}
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
