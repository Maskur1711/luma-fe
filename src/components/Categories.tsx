const categories = [
  { name: "Snacks", emoji: "🍪", color: "bg-[#FFE3E3]" },
  { name: "Bakery", emoji: "🥐", color: "bg-[#FFAE6E]" },
  { name: "Beverages", emoji: "🧃", color: "bg-[#8FDDDF]" },
  { name: "Desserts", emoji: "🍰", color: "bg-[#EC6530]" },
  { name: "Fast Food", emoji: "🍔", color: "bg-[#FFE3E3]" },
  { name: "Healthy", emoji: "🥗", color: "bg-[#8FDDDF]" },
];

export default function Categories() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#EC6530] text-center mb-12">
          📂 Jelajahi Kategori
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className={`${category.color} rounded-lg p-6 text-center hover:shadow-lg transition transform hover:scale-110 cursor-pointer`}
            >
              <div className="text-4xl mb-2">{category.emoji}</div>
              <h3 className="font-semibold text-gray-800">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
