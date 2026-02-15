export const getDashboardData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const usersToday = data.length;

    const usersYesterday = Math.floor(usersToday * (Math.random() * 0.5 + 0.5));

    const totalRevenue = usersToday * 100;

    return {
      usersToday,
      usersYesterday,
      totalRevenue,
    };
  } catch (error) {
    console.error("API error:", error);
    return {
      usersToday: 0,
      usersYesterday: 0,
      totalRevenue: 0,
    };
  }
};
