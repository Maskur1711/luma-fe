import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    avatar: "👨‍💼",
    rating: 5,
    text: "Makanannya enak dan pengiriman cepat! Puas banget dengan Luna Food.",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    avatar: "👩‍🦰",
    rating: 5,
    text: "Kualitas premium dengan harga yang terjangkau. Recommended banget!",
  },
  {
    id: 3,
    name: "Ahmad Wijaya",
    avatar: "👨‍🦱",
    rating: 4,
    text: "Packaging rapi dan makanan fresh. Akan order lagi pasti.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#EC6530] text-center mb-12">
          💬 Apa Kata Pelanggan Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-[#FFE3E3] to-[#FFAE6E] rounded-lg p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < testimonial.rating
                            ? "fill-[#EC6530] text-[#EC6530]"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
