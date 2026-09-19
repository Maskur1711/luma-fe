export default function SpecialOffers() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Promo Spesial Hari Ini
          </h2>
          <p className="text-xl text-gray-700 mb-2">
            Dapatkan diskon hingga <span className="font-bold text-[#EC6530] text-3xl">40%</span>
          </p>
          <p className="text-gray-600 mb-8">
            Untuk pembelian pertama Anda di Luma
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#EC6530] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition">
              Gunakan Kode: LUMA40
            </button>
            <button className="bg-white border border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition">
              Lihat Penawaran Lainnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
