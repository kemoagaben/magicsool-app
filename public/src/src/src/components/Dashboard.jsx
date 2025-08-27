export default function Dashboard() {
  const [metrics, setMetrics] = useState({
    activeUsers: 0,
    dailyQuestions: 0,
    avgSession: "0dk",
    accuracy: "0%",
    aiConfidence: "Yükleniyor..."
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        activeUsers: Math.floor(Math.random() * 500) + 200,
        dailyQuestions: Math.floor(Math.random() * 2000) + 8000,
        avgSession: `${Math.floor(Math.random() * 15) + 35}dk`,
        accuracy: `${Math.floor(Math.random() * 15) + 75}%`,
        aiConfidence: ["Yüksek", "Orta", "Düşük"][Math.floor(Math.random() * 3)]
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold">Hoş Geldin, Efe 👋</h2>
      <p className="text-gray-300">Bugün TYT Matematik'te %40 eksin. AITO sana yardımcı olacak.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard label="Aktif Kullanıcı" value={metrics.activeUsers} color="blue" />
        <MetricCard label="Günlük Soru" value={metrics.dailyQuestions} color="green" />
        <MetricCard label="Ort. Oturum" value={metrics.avgSession} color="purple" />
        <MetricCard label="Doğruluk" value={metrics.accuracy} color="yellow" />
      </div>
    </div>
  );
}
