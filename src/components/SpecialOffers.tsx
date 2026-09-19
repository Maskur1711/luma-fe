export default function SpecialOffers() {
  return (
    <section className="py-16 px-4 bg-[#FFE3E3]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl p-12 border-4 border-[#EC6530] text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-4xl font-bold text-[#EC6530] mb-4">
            Promo Spesial Hari Ini!
          </h2>
          <p className="text-xl text-gray-700 mb-2">
            Dapatkan diskon hingga <span className="font-bold text-[#EC6530] text-3xl">40%</span>
          </p>
          <p className="text-gray-600 mb-8">
            Untuk pembelian pertama Anda di Luna Food
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#EC6530] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFAE6E] transition">
              Gunakan Kode: LUNA40
            </button>
            <button className="bg-[#8FDDDF] text-[#EC6530] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition">
              Lihat Penawaran Lainnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
