export default function EmotiveAvatar({ emotion = 'calm' }) {
  const moods = {
    calm: "Düşünüyor... Nasıl gidiyor?",
    happy: "Harika! Devam et!",
    frustrated: "Zorlandın mı? Yardımcı olayım mı?",
    excited: "Bunu çözdün! Mükemmel!"
  };

  return (
    <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
      <div className="w-32 h-32 mx-auto mb-4 relative">
        <img src="/avatar.png" alt="magicsool Avatar" className="w-full h-full object-cover rounded-full" />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-black rounded animate-pulse"></div>
      </div>
      <p className="text-sm">{moods[emotion]}</p>
    </div>
  );
}
