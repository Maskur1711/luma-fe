const categories = [
  { name: "Snacks", color: "bg-[#FFE3E3]" },
  { name: "Bakery", color: "bg-[#FFAE6E]" },
  { name: "Beverages", color: "bg-[#8FDDDF]" },
  { name: "Desserts", color: "bg-[#EC6530]" },
  { name: "Fast Food", color: "bg-[#FFE3E3]" },
  { name: "Healthy", color: "bg-[#8FDDDF]" },
];

export default function Categories() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#EC6530] text-center mb-12">
          Jelajahi Kategori
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className={`${category.color} rounded-lg p-6 text-center hover:shadow-lg transition transform hover:scale-110 cursor-pointer`}
            >
              <h3 className="font-semibold text-gray-800">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
