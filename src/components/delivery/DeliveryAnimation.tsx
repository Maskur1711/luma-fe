"use client";

import { Building, Home } from "lucide-react";

const SKYLINE = [
  { left: 0, width: 9, height: 34 },
  { left: 10, width: 7, height: 48 },
  { left: 18, width: 10, height: 26 },
  { left: 29, width: 8, height: 56 },
  { left: 38, width: 11, height: 38 },
  { left: 50, width: 7, height: 44 },
  { left: 58, width: 9, height: 60 },
  { left: 68, width: 8, height: 30 },
  { left: 77, width: 10, height: 48 },
  { left: 88, width: 9, height: 36 },
];

export default function DeliveryAnimation() {
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden relative bg-[linear-gradient(180deg,var(--color-brand-accent-soft)_0%,#FAF6F0_60%,#FFFFFF_100%)]">
      {/* Top decoration */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(217,119,87,0.08)_0%,transparent_60%)]"></div>

      {/* City skyline */}
      <div className="absolute bottom-24 w-full h-16 overflow-hidden pointer-events-none">
        {SKYLINE.map((b, i) => (
          <div
            key={i}
            className="absolute bottom-0 rounded-t-sm"
            style={{
              left: `${b.left}%`,
              width: `${b.width}%`,
              height: `${b.height}px`,
              backgroundColor: "#D9C7B8",
              opacity: 0.28,
              backgroundImage: "radial-gradient(circle, rgba(217,119,87,0.35) 1px, transparent 1.5px)",
              backgroundSize: "10px 12px",
              backgroundPosition: "3px 6px",
            }}
          ></div>
        ))}
      </div>

      {/* Road base */}
      <div className="absolute bottom-24 w-full h-2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 shadow-md"></div>

      {/* Road dashes - smooth animation */}
      <div className="absolute bottom-24 w-full h-2 flex overflow-hidden opacity-60">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{
              width: "6%",
              backgroundImage: "linear-gradient(90deg, transparent 35%, white 35%, white 65%, transparent 65%)",
              animation: "roadMove 2s linear infinite",
              animationDelay: `${i * -0.067}s`
            }}
          ></div>
        ))}
      </div>

      {/* Restaurant */}
      <div className="absolute left-8 bottom-32 z-10">
        <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-brand-accent">
          <Building size={28} className="text-white" />
        </div>
        <p className="text-xs font-semibold mt-2 text-center text-brand-brown">Resto</p>
      </div>

      {/* Animated Delivery Truck - SMOOTH */}
      <div
        className="absolute z-20"
        style={{
          bottom: "24px",
          animation: "deliverySmooth 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
          left: "8%",
          filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))"
        }}
      >
        {/* Detailed delivery truck SVG */}
        <svg width="120" height="56" viewBox="0 0 120 56" className="w-full h-full">
          {/* Rear axle wheels (double) */}
          <circle cx="22" cy="48" r="8" fill="none" stroke="#1f2937" strokeWidth="2.5"/>
          <circle cx="22" cy="48" r="5" fill="none" stroke="#9ca3af" strokeWidth="1" opacity="0.7"/>
          <line x1="22" y1="41" x2="22" y2="55" stroke="#D97757" strokeWidth="1.2" style={{ transformOrigin: "22px 48px", animation: "wheelSpin 0.6s linear infinite" }}/>
          <line x1="15" y1="48" x2="29" y2="48" stroke="#D97757" strokeWidth="1.2" style={{ transformOrigin: "22px 48px", animation: "wheelSpin 0.6s linear infinite" }}/>

          <circle cx="36" cy="48" r="8" fill="none" stroke="#1f2937" strokeWidth="2.5"/>
          <circle cx="36" cy="48" r="5" fill="none" stroke="#9ca3af" strokeWidth="1" opacity="0.7"/>
          <line x1="36" y1="41" x2="36" y2="55" stroke="#D97757" strokeWidth="1.2" style={{ transformOrigin: "36px 48px", animation: "wheelSpin 0.6s linear infinite" }}/>
          <line x1="29" y1="48" x2="43" y2="48" stroke="#D97757" strokeWidth="1.2" style={{ transformOrigin: "36px 48px", animation: "wheelSpin 0.6s linear infinite" }}/>

          {/* Front wheel */}
          <circle cx="96" cy="48" r="8" fill="none" stroke="#1f2937" strokeWidth="2.5"/>
          <circle cx="96" cy="48" r="5" fill="none" stroke="#9ca3af" strokeWidth="1" opacity="0.7"/>
          <line x1="96" y1="41" x2="96" y2="55" stroke="#D97757" strokeWidth="1.2" style={{ transformOrigin: "96px 48px", animation: "wheelSpin 0.6s linear infinite" }}/>
          <line x1="89" y1="48" x2="103" y2="48" stroke="#D97757" strokeWidth="1.2" style={{ transformOrigin: "96px 48px", animation: "wheelSpin 0.6s linear infinite" }}/>

          {/* Undercarriage */}
          <line x1="10" y1="46" x2="112" y2="46" stroke="#1f2937" strokeWidth="2" strokeLinecap="round"/>

          {/* Brand accent stripe */}
          <rect x="8" y="42" width="104" height="3.5" rx="1" fill="#4A3527" opacity="0.85"/>

          {/* Cargo box */}
          <rect x="8" y="14" width="62" height="30" rx="4" fill="#D97757" stroke="#4A3527" strokeWidth="1.5"/>
          <rect x="8" y="14" width="62" height="6" rx="3" fill="#EFA484" opacity="0.6"/>
          <line x1="39" y1="14" x2="39" y2="44" stroke="#4A3527" strokeWidth="1" opacity="0.35" strokeDasharray="3,2"/>
          <line x1="15" y1="30" x2="24" y2="30" stroke="#4A3527" strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
          <line x1="19.5" y1="25.5" x2="19.5" y2="34.5" stroke="#4A3527" strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>

          {/* Cab roof */}
          <path d="M74 22 Q90 8 112 18 L112 22 Z" fill="#3a2a1f"/>

          {/* Cab body */}
          <rect x="74" y="22" width="38" height="24" rx="4" fill="#4A3527" stroke="#3a2a1f" strokeWidth="1"/>

          {/* Windshield */}
          <rect x="80" y="25" width="26" height="16" rx="3" fill="#D9C7B8" opacity="0.85" stroke="#4A3527" strokeWidth="0.8"/>
          <path d="M82 27 L87 27 L82 33 Z" fill="#FFFFFF" opacity="0.35"/>

          {/* Side window */}
          <rect x="77" y="30" width="7" height="10" rx="2" fill="#D9C7B8" opacity="0.5" stroke="#4A3527" strokeWidth="0.6"/>

          {/* Headlight */}
          <ellipse cx="111" cy="42" rx="3" ry="2.2" fill="#F2A65A" opacity="0.9"/>
          <ellipse cx="111" cy="42" rx="1.5" ry="1" fill="#FFFFFF" opacity="0.8"/>

          {/* Grill */}
          <rect x="108" y="44" width="6" height="5" rx="1" fill="#3a2a1f" stroke="#4A3527" strokeWidth="0.6"/>
          <line x1="108" y1="46" x2="114" y2="46" stroke="#4A3527" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Home destination */}
      <div className="absolute right-8 bottom-32 z-10">
        <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-brand-success-bg border-2 border-brand-success-border">
          <Home size={28} className="text-brand-success" />
        </div>
        <p className="text-xs font-semibold mt-2 text-center text-brand-brown">Rumah</p>
      </div>

      {/* Status badge */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg bg-white border border-brand-border-light">
          <div className="w-2 h-2 rounded-full animate-pulse bg-brand-accent"></div>
          <span className="text-sm font-semibold text-brand-ink">Dalam Perjalanan</span>
        </div>
      </div>

      <style>{`
        @keyframes deliverySmooth {
          0% {
            left: 5%;
            transform: scaleX(1);
            opacity: 1;
          }
          25% {
            opacity: 1;
          }
          50% {
            left: 47.5%;
            transform: scaleX(1);
          }
          75% {
            opacity: 1;
          }
          100% {
            left: 85%;
            transform: scaleX(-1);
            opacity: 1;
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

        @keyframes wheelSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
