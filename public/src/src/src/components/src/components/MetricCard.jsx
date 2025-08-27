export default function MetricCard({ label, value, color }) {
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    yellow: "bg-yellow-500"
  };

  return (
    <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
      <h4 className="text-sm text-gray-300">{label}</h4>
      <p className={`text-2xl font-bold ${colorClasses[color] || 'bg-gray-500'}`}>{value}</p>
    </div>
  );
}
