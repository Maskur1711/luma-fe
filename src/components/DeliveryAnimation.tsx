"use client";

export default function DeliveryAnimation() {
  return (
    <div className="w-full h-64 bg-gradient-to-b from-sky-100 via-sky-50 to-white rounded-xl overflow-hidden flex items-center justify-center relative shadow-inner">
      {/* Animated gradient sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200/30 via-cyan-100/20 to-transparent"></div>

      {/* Clouds animation */}
      <div className="absolute top-8 left-0 w-20 h-8 bg-white rounded-full opacity-60" style={{
        animation: "cloudFloat 8s ease-in-out infinite",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}></div>
      <div className="absolute top-12 right-0 w-24 h-10 bg-white rounded-full opacity-50" style={{
        animation: "cloudFloat 10s ease-in-out infinite 2s",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}></div>

      {/* Road base */}
      <div className="absolute bottom-20 w-full h-2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 shadow-md"></div>

      {/* Road markings animation */}
      <div className="absolute bottom-20 w-full h-2 flex overflow-hidden opacity-70">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="h-full flex-shrink-0"
            style={{
              width: "8%",
              backgroundImage: "linear-gradient(90deg, transparent 40%, white 40%, white 60%, transparent 60%)",
              animation: "roadMove 2s linear infinite",
              animationDelay: `${i * -0.067}s`
            }}
          ></div>
        ))}
      </div>

      {/* Restaurant building */}
      <div className="absolute left-6 bottom-24 z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-[#EC6530] to-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
            <path d="M4 10h24v16H4z"/>
            <path d="M8 14h4v8H8zm8 0h4v8h-4zm8 0h4v8h-4z"/>
            <path d="M16 4l10 6H6z"/>
          </svg>
        </div>
        <p className="text-xs text-gray-700 font-semibold mt-2 text-center">Resto</p>
      </div>

      {/* Animated Delivery Motorcycle */}
      <div
        className="absolute z-20"
        style={{
          bottom: "20px",
          animation: "deliverySmoothMove 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
          left: "10%",
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))"
        }}
      >
        <svg width="70" height="50" viewBox="0 0 70 50" className="transition-transform duration-300">
          {/* Back Wheel with rim effect */}
          <g>
            <circle cx="14" cy="35" r="10" fill="none" stroke="#1f2937" strokeWidth="3"/>
            <circle cx="14" cy="35" r="7" fill="none" stroke="#4b5563" strokeWidth="1" opacity="0.6"/>
            <circle cx="14" cy="35" r="4" fill="none" stroke="#d1d5db" strokeWidth="0.5"/>
            {[...Array(8)].map((_, i) => (
              <line
                key={`rim${i}`}
                x1="14"
                y1="25"
                x2={14 + Math.cos((i * Math.PI) / 4) * 5}
                y2={35 + Math.sin((i * Math.PI) / 4) * 5}
                stroke="#9ca3af"
                strokeWidth="0.5"
              />
            ))}
          </g>

          {/* Front Wheel with rim effect */}
          <g>
            <circle cx="56" cy="35" r="10" fill="none" stroke="#1f2937" strokeWidth="3"/>
            <circle cx="56" cy="35" r="7" fill="none" stroke="#4b5563" strokeWidth="1" opacity="0.6"/>
            <circle cx="56" cy="35" r="4" fill="none" stroke="#d1d5db" strokeWidth="0.5"/>
            {[...Array(8)].map((_, i) => (
              <line
                key={`frontrim${i}`}
                x1="56"
                y1="25"
                x2={56 + Math.cos((i * Math.PI) / 4) * 5}
                y2={35 + Math.sin((i * Math.PI) / 4) * 5}
                stroke="#9ca3af"
                strokeWidth="0.5"
              />
            ))}
          </g>

          {/* Frame - Main body */}
          <g strokeLinecap="round" strokeLinejoin="round">
            <line x1="14" y1="35" x2="35" y2="18" stroke="#374151" strokeWidth="2.5"/>
            <line x1="35" y1="18" x2="56" y2="35" stroke="#374151" strokeWidth="2.5"/>
            <line x1="14" y1="35" x2="56" y2="35" stroke="#374151" strokeWidth="2.5"/>
            <line x1="35" y1="18" x2="28" y2="25" stroke="#374151" strokeWidth="2"/>
          </g>

          {/* Seat with gradient */}
          <ellipse cx="32" cy="16" rx="8" ry="3" fill="#EC6530" opacity="0.9" filter="url(#seatShadow)"/>
          <ellipse cx="32" cy="15" rx="8" ry="2.5" fill="#ff7a3d" opacity="0.6"/>

          {/* Handlebars */}
          <g strokeLinecap="round">
            <line x1="56" y1="35" x2="58" y2="28" stroke="#374151" strokeWidth="2.5"/>
            <path d="M 55 27 Q 58 25 61 27" fill="none" stroke="#374151" strokeWidth="2"/>
            <circle cx="55" cy="27" r="1.5" fill="#6b7280"/>
            <circle cx="61" cy="27" r="1.5" fill="#6b7280"/>
          </g>

          {/* Delivery Box - Main */}
          <g filter="url(#boxShadow)">
            <rect x="22" y="10" width="16" height="12" fill="#EC6530" rx="2" opacity="0.95"/>
            <rect x="22" y="10" width="16" height="12" fill="none" stroke="#374151" strokeWidth="1.5" rx="2"/>

            {/* Box door */}
            <line x1="30" y1="10" x2="30" y2="22" stroke="#374151" strokeWidth="1" opacity="0.5"/>

            {/* Box handle */}
            <rect x="27" y="8" width="6" height="1.5" fill="#d97706" rx="0.5"/>

            {/* Luma branding on box */}
            <text x="30" y="19" fontSize="2" fill="white" fontWeight="bold" textAnchor="middle">L</text>
          </g>

          {/* Driver helmet */}
          <circle cx="50" cy="22" r="2.5" fill="#374151"/>
          <path d="M 48 24 L 48 27 M 50 25 L 52 27" stroke="#374151" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

          {/* Headlight effect */}
          <circle cx="58" cy="32" r="1.5" fill="#fbbf24" opacity="0.7" filter="url(#lightGlow)"/>

          {/* Defs for filters */}
          <defs>
            <filter id="boxShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2"/>
            </filter>
            <filter id="seatShadow">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.15"/>
            </filter>
            <filter id="lightGlow">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Destination home */}
      <div className="absolute right-6 bottom-24 z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center border-2 border-green-300 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="#16a34a">
            <path d="M16 4l12 10h-2v12H6V14H4z"/>
            <path d="M12 20h8v6h-8z" fill="#fef3c7"/>
            <circle cx="16" cy="23" r="1.5" fill="#374151"/>
          </svg>
        </div>
        <p className="text-xs text-gray-700 font-semibold mt-2 text-center">Rumah</p>
      </div>

      {/* Status indicator with animation */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
          <div className="w-2 h-2 bg-[#EC6530] rounded-full animate-pulse"></div>
          <p className="text-sm font-semibold text-gray-900">Dalam Perjalanan</p>
        </div>
      </div>

      <style>{`
        @keyframes deliverySmoothMove {
          0% {
            left: 5%;
            transform: scaleX(1);
          }
          25% {
            transform: translateY(-8px) scaleX(1);
          }
          50% {
            left: 47.5%;
            transform: translateY(0) scaleX(1);
          }
          75% {
            transform: translateY(-8px) scaleX(-1);
          }
          100% {
            left: 85%;
            transform: translateY(0) scaleX(-1);
          }
        }

        @keyframes roadMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes cloudFloat {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
