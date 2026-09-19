"use client";

export default function DeliveryAnimation() {
  return (
    <div className="w-full h-56 bg-gradient-to-b from-blue-50 to-white rounded-xl overflow-hidden relative shadow-sm">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100/50 to-transparent pointer-events-none"></div>

      {/* Road */}
      <div className="absolute bottom-20 w-full h-1.5 bg-gray-400"></div>

      {/* Road dashes animation */}
      <div className="absolute bottom-20 w-full h-1.5 flex overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="h-full w-12 border-l-2 border-white flex-shrink-0"
            style={{
              animation: "roadDash 3s linear infinite",
              animationDelay: `${i * -0.15}s`
            }}
          ></div>
        ))}
      </div>

      {/* Restaurant marker */}
      <div className="absolute left-8 bottom-24 z-10">
        <div className="w-12 h-12 rounded-full bg-[#EC6530] flex items-center justify-center text-white shadow-md font-bold">
          🏪
        </div>
      </div>

      {/* Animated delivery bike - Simple and clean */}
      <div
        className="absolute bottom-20 z-20"
        style={{
          animation: "bikeSmoothMove 4.5s cubic-bezier(0.42, 0, 0.58, 1) infinite",
          left: "10%"
        }}
      >
        <svg width="60" height="45" viewBox="0 0 60 45" className="drop-shadow-lg">
          {/* Back wheel */}
          <circle cx="12" cy="32" r="9" fill="none" stroke="#2d3748" strokeWidth="2.5"/>
          <circle cx="12" cy="32" r="5.5" fill="none" stroke="#a0aec0" strokeWidth="1"/>

          {/* Front wheel */}
          <circle cx="48" cy="32" r="9" fill="none" stroke="#2d3748" strokeWidth="2.5"/>
          <circle cx="48" cy="32" r="5.5" fill="none" stroke="#a0aec0" strokeWidth="1"/>

          {/* Frame lines */}
          <line x1="12" y1="32" x2="32" y2="16" stroke="#2d3748" strokeWidth="2" strokeLinecap="round"/>
          <line x1="32" y1="16" x2="48" y2="32" stroke="#2d3748" strokeWidth="2" strokeLinecap="round"/>
          <line x1="12" y1="32" x2="48" y2="32" stroke="#2d3748" strokeWidth="2" strokeLinecap="round"/>

          {/* Seat */}
          <ellipse cx="30" cy="14" rx="7" ry="2.5" fill="#EC6530"/>

          {/* Handlebar */}
          <line x1="48" y1="32" x2="50" y2="26" stroke="#2d3748" strokeWidth="2" strokeLinecap="round"/>
          <path d="M 46 26 Q 50 24 54 26" fill="none" stroke="#2d3748" strokeWidth="2" strokeLinecap="round"/>

          {/* Delivery Box */}
          <rect x="21" y="9" width="13" height="9" fill="#EC6530" rx="1.5" opacity="0.9"/>
          <rect x="21" y="9" width="13" height="9" fill="none" stroke="#2d3748" strokeWidth="1.5" rx="1.5"/>
          <line x1="27.5" y1="9" x2="27.5" y2="18" stroke="#2d3748" strokeWidth="1" opacity="0.4"/>

          {/* Person head */}
          <circle cx="44" cy="20" r="2" fill="#2d3748"/>
          {/* Person body */}
          <line x1="44" y1="22" x2="44" y2="26" stroke="#2d3748" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Home marker */}
      <div className="absolute right-8 bottom-24 z-10">
        <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-400 flex items-center justify-center text-white shadow-md font-bold text-2xl">
          🏠
        </div>
      </div>

      {/* Status label */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <span className="inline-block bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-[#EC6530] shadow-md border border-white/30">
          Sedang Dikirim
        </span>
      </div>

      <style>{`
        @keyframes bikeSmoothMove {
          0% {
            left: 5%;
            transform: scaleX(1);
          }
          50% {
            left: 47.5%;
            transform: scaleX(1);
          }
          100% {
            left: 85%;
            transform: scaleX(-1);
          }
        }

        @keyframes roadDash {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-48px);
          }
        }
      `}</style>
    </div>
  );
}
