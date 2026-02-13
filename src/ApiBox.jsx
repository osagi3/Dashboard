// fakeApi.js

export const getDashboardData = async () => {
  try {
    // Fetch users from real API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    // Use real user count as "usersToday"
    const usersToday = data.length;

    // Simulate yesterday with a smaller random count
    const usersYesterday = Math.floor(usersToday * (Math.random() * 0.5 + 0.5));

    // Simulate revenue based on users (for demo)
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
