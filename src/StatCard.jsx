function StatCard({ label, value, icon }) {
  const positive = value > 0;
  const nagative = value < 0;
  return (
    <div className="bg-white flex justify-between p-4 w-50 h-20 rounded-2xl">
      <div>
        <p className="font-bold text-gray-400 ">{label}</p>
        <div className="flex gap-1">
          <p className="font-bold ">{value}</p>
          {label === "Growth" && (
            <span
              className={`font-bold ${
                positive ? "text-green-500" : "text-red-500"
              }`}
            >
              {positive ? "↑" : nagative ? "↓" : ""}
            </span>
          )}
        </div>
      </div>
      <div>
        <p className="bg-green-500 p-2 flex items-center rounded-xl">{icon}</p>
      </div>
    </div>
  );
}

export default StatCard;
