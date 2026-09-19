"use client";

export default function DeliveryAnimation() {
  return (
    <div className="w-full h-48 bg-gradient-to-b from-blue-50 to-white rounded-lg overflow-hidden flex items-center justify-center relative">
      {/* Sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-50 to-white opacity-50"></div>

      {/* Road */}
      <div className="absolute bottom-12 w-full h-1.5 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400"></div>

      {/* Road lines animation */}
      <div className="absolute bottom-12 w-full h-1.5 flex overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="h-full w-8 border-l-2 border-white flex-shrink-0"
            style={{
              animation: "roadMove 2s linear infinite",
              animationDelay: `${i * -0.1}s`
            }}
          ></div>
        ))}
      </div>

      {/* Restaurant icon */}
      <div className="absolute left-8 bottom-16 z-10">
        <div className="w-12 h-12 bg-[#EC6530] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
          🏪
        </div>
        <p className="text-xs text-gray-600 mt-2 font-medium">Resto</p>
      </div>

      {/* Animated Delivery Bike */}
      <div
        className="absolute bottom-12 z-20"
        style={{
          animation: "deliveryBikeMove 4s infinite ease-in-out",
          left: "10%"
        }}
      >
        <svg width="60" height="40" viewBox="0 0 60 40" className="drop-shadow-lg">
          {/* Back Wheel */}
          <circle cx="12" cy="28" r="8" fill="none" stroke="#333" strokeWidth="2"/>
          <circle cx="12" cy="28" r="5" fill="none" stroke="#666" strokeWidth="1.5" opacity="0.5"/>

          {/* Front Wheel */}
          <circle cx="48" cy="28" r="8" fill="none" stroke="#333" strokeWidth="2"/>
          <circle cx="48" cy="28" r="5" fill="none" stroke="#666" strokeWidth="1.5" opacity="0.5"/>

          {/* Frame */}
          <line x1="12" y1="28" x2="30" y2="14" stroke="#333" strokeWidth="2"/>
          <line x1="30" y1="14" x2="48" y2="28" stroke="#333" strokeWidth="2"/>
          <line x1="12" y1="28" x2="48" y2="28" stroke="#333" strokeWidth="2"/>

          {/* Seat */}
          <rect x="28" y="10" width="12" height="2" fill="#EC6530" rx="1"/>

          {/* Handlebars */}
          <line x1="48" y1="28" x2="50" y2="22" stroke="#333" strokeWidth="2"/>
          <path d="M 46 22 Q 50 20 54 22" fill="none" stroke="#333" strokeWidth="2"/>

          {/* Delivery Box */}
          <rect x="20" y="8" width="14" height="10" fill="#EC6530" rx="2" opacity="0.9"/>
          <rect x="20" y="8" width="14" height="10" fill="none" stroke="#333" strokeWidth="1.5"/>
          <line x1="27" y1="8" x2="27" y2="18" stroke="#333" strokeWidth="1" opacity="0.5"/>

          {/* Person */}
          <circle cx="45" cy="18" r="2.5" fill="#333"/>
          <path d="M 43 21 L 43 25 M 45 23 L 47 25" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Home icon */}
      <div className="absolute right-8 bottom-16 z-10">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center border-2 border-green-300 shadow-md">
          <span className="text-2xl">🏠</span>
        </div>
        <p className="text-xs text-gray-600 mt-2 font-medium">Rumah</p>
      </div>

      {/* Distance label */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2">
        <p className="text-sm font-bold text-[#EC6530] bg-white px-3 py-1 rounded-full shadow-md">
          Dalam Perjalanan
        </p>
      </div>

      <style>{`
        @keyframes deliveryBikeMove {
          0% {
            left: 5%;
            transform: scaleX(1);
          }
          50% {
            left: 47.5%;
          }
          100% {
            left: 85%;
            transform: scaleX(-1);
          }
        }

        @keyframes roadMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-32px);
          }
        }
      `}</style>
    </div>
  );
}
