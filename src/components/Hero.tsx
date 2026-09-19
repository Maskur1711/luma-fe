export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#EC6530] to-[#FFAE6E] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-6xl mb-4">🍕</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Pesan Makanan Lezat Dari Rumah
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Nikmati berbagai pilihan makanan premium dengan harga terjangkau, diantar langsung ke pintu Anda
        </p>
        <button className="bg-[#8FDDDF] text-[#EC6530] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition transform hover:scale-105">
          Shop Now 🛒
        </button>
      </div>
    </section>
  );
}
