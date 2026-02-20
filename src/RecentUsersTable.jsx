import { useState } from "react";

function RecentUsersTable({ users }) {
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  function handleSort(field) {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  }

  const sortedUsers = [...users].sort((a, b) => {
    let aValue;
    let bValue;

    if (sortField === "company") {
      aValue = a.company.name.toLowerCase();
      bValue = b.company.name.toLowerCase();
    } else {
      aValue = a[sortField].toLowerCase();
      bValue = b[sortField].toLowerCase();
    }

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-10">
      <h2 className="text-lg font-bold mb-4">Recent users</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th
              onClick={() => handleSort("name")}
              className="pb-2 cursor-pointer text-gray-400"
            >
              Name{sortField === "name" && (sortOrder === "asc" ? "⬆︎" : "⬇︎")}
            </th>
            <th
              onClick={() => handleSort("email")}
              className="pb-2 cursor-pointer text-gray-400"
            >
              Email
              {sortField === "email" && (sortOrder === "asc" ? "⬆︎" : "⬇︎")}
            </th>
            <th
              onClick={() => handleSort("company")}
              className="pb-2 cursor-pointer text-gray-400"
            >
              Company
              {sortField === "company" && (sortOrder === "asc" ? "⬆︎" : "⬇︎")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="py-5">{user.name}</td>
              <td className="py-5">{user.email}</td>
              <td className="py-5">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentUsersTable;
