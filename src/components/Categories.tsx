const categories = [
  { name: "Snacks" },
  { name: "Bakery" },
  { name: "Beverages" },
  { name: "Desserts" },
  { name: "Fast Food" },
  { name: "Healthy" },
];

export default function Categories() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Jelajahi Kategori
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition hover:border-[#EC6530] cursor-pointer"
            >
              <h3 className="font-semibold text-gray-800">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
