"use client";

export default function DeliveryAnimation() {
  return (
    <div className="relative w-full h-40 bg-gradient-to-b from-blue-50 to-white rounded-lg overflow-hidden flex items-center justify-center">
      {/* Road */}
      <div className="absolute bottom-12 w-full h-1 bg-gray-400"></div>

      {/* Animated Delivery Bike */}
      <div className="absolute animate-pulse" style={{
        animation: "deliveryMove 4s infinite ease-in-out"
      }}>
        <div className="text-6xl">🏍️</div>
      </div>

      {/* Start point */}
      <div className="absolute left-4 bottom-8 text-2xl">🏪</div>

      {/* End point */}
      <div className="absolute right-4 bottom-8 text-2xl">🏠</div>

      <style>{`
        @keyframes deliveryMove {
          0% {
            left: 2rem;
            transform: scaleX(1);
          }
          50% {
            left: calc(50% - 1.5rem);
          }
          100% {
            left: calc(100% - 4rem);
            transform: scaleX(-1);
          }
        }
      `}</style>
    </div>
  );
}
