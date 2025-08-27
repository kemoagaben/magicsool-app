import { useState } from 'react';

export default function AITOChat() {
  const [messages, setMessages] = useState([
    { sender: 'aito', text: "Merhaba! Bugün sana nasıl yardımcı olabilirim?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      let response;
      if (input.includes("problem")) {
        response = "Bu problemde hangi bilinmeyeni bulmaya çalışıyorsun? Hadi ilk adım ne olmalı?";
      } else if (input.includes("çözemedim")) {
        response = "Endişelenme, bu soru zor olabilir. Hangi kısmı anlamadın? Belki birlikte adım adım gidelim?";
      } else {
        response = "İlginç! Bu soruyu nasıl çözmeyi denedin? Başka bir yol düşünülebilir mi?";
      }
      setMessages(prev => [...prev, { sender: 'aito', text: response }]);
    }, 800);

    setInput('');
  };

  return (
    <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-4 h-96 flex flex-col">
      <h3 className="text-xl font-bold mb-4">AITO ile Sohbet</h3>
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500' : 'bg-gray-600'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Sorunu yaz veya fotoğraf çek..."
          className="flex-1 px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30"
        />
        <button onClick={handleSend} className="px-6 py-2 bg-purple-600 rounded-lg">Gönder</button>
      </div>
    </div>
  );
        }
