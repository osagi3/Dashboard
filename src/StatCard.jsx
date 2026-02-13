function StatCard({ label, value, icon, displayValue, cardsPercent }) {
  const positive = value > 0;
  const nagative = value < 0;

  return (
    <div className="bg-white flex justify-between p-4 w-50 h-20 rounded-2xl">
      <div>
        <p className="font-bold text-gray-400 ">{label}</p>
        <div className="flex gap-1">
          <p className="font-bold">{displayValue ? displayValue : value}</p>
          <p className="text-sm font-medium ">{cardsPercent}</p>

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
        <div className="bg-green-500 p-2 flex items-center rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;
