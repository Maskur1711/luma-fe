export default function About() {
  return (
    <section className="py-16 px-4 bg-[#8FDDDF]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Tentang Luma
            </h2>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Luma adalah platform e-commerce makanan terpercaya yang menghadirkan berbagai pilihan makanan berkualitas premium langsung ke pintu Anda.
            </p>
            <p className="text-lg text-white mb-6 leading-relaxed">
              Kami berkomitmen untuk memberikan pengalaman berbelanja terbaik dengan produk segar, harga kompetitif, dan layanan pelanggan yang responsif.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-[#EC6530]">500+</div>
                <p className="text-sm text-gray-700">Produk</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-[#EC6530]">10K+</div>
                <p className="text-sm text-gray-700">Pelanggan</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-[#EC6530]">24/7</div>
                <p className="text-sm text-gray-700">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
