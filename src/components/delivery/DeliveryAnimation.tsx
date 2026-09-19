"use client";

import { Building, Home } from "lucide-react";

export default function DeliveryAnimation() {
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden relative bg-[linear-gradient(180deg,var(--color-brand-accent-soft)_0%,#FAF6F0_60%,#FFFFFF_100%)]">
      {/* Top decoration */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(217,119,87,0.08)_0%,transparent_60%)]"></div>

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

      {/* Animated Delivery Bike - SMOOTH */}
      <div
        className="absolute z-20"
        style={{
          bottom: "24px",
          animation: "deliverySmooth 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
          left: "8%",
          filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))"
        }}
      >
        {/* Simple, clean motorcycle SVG */}
        <svg width="68" height="48" viewBox="0 0 68 48" className="w-full h-full">
          {/* Back wheel */}
          <circle cx="14" cy="36" r="10" fill="none" stroke="#1f2937" strokeWidth="3"/>
          <circle cx="14" cy="36" r="6.5" fill="none" stroke="#9ca3af" strokeWidth="1" opacity="0.7"/>

          {/* Front wheel */}
          <circle cx="54" cy="36" r="10" fill="none" stroke="#1f2937" strokeWidth="3"/>
          <circle cx="54" cy="36" r="6.5" fill="none" stroke="#9ca3af" strokeWidth="1" opacity="0.7"/>

          {/* Frame */}
          <g strokeLinecap="round" strokeLinejoin="round">
            <line x1="14" y1="36" x2="34" y2="18" stroke="#1f2937" strokeWidth="2.5"/>
            <line x1="34" y1="18" x2="54" y2="36" stroke="#1f2937" strokeWidth="2.5"/>
            <line x1="14" y1="36" x2="54" y2="36" stroke="#1f2937" strokeWidth="2.5"/>
            <line x1="34" y1="18" x2="26" y2="26" stroke="#1f2937" strokeWidth="2"/>
          </g>

          {/* Seat */}
          <ellipse cx="32" cy="16" rx="8" ry="2.5" fill="#D97757"/>

          {/* Handlebar */}
          <g strokeLinecap="round">
            <line x1="54" y1="36" x2="56" y2="30" stroke="#1f2937" strokeWidth="2.5"/>
            <path d="M 52 29 Q 56 27 60 29" fill="none" stroke="#1f2937" strokeWidth="2"/>
          </g>

          {/* Delivery Box */}
          <rect x="22" y="11" width="14" height="10" fill="#D97757" rx="1" opacity="0.95" />
          <rect x="22" y="11" width="14" height="10" fill="none" stroke="#1f2937" strokeWidth="1.5" rx="1"/>
          <line x1="29" y1="11" x2="29" y2="21" stroke="#1f2937" strokeWidth="1" opacity="0.3"/>

          {/* Rider */}
          <circle cx="48" cy="22" r="2.5" fill="#1f2937"/>
          <line x1="48" y1="25" x2="48" y2="29" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round"/>
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
      `}</style>
    </div>
  );
}
