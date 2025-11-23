"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const gradeTypes = [
  {
    image: "/images/ceremonial-grade-matcha-powder-vibrant-green.jpg",
    title: "Ceremonial Grade",
    description:
      "The highest quality matcha, reserved for traditional tea ceremonies. It features a vibrant green color, smooth texture, and delicate, slightly sweet flavor. Perfect for whisking into a traditional bowl of hot water.",
    features: ["Finest leaves", "Bright green color", "Smooth flavor"],
  },
  {
    image: "/images/premium-matcha-powder-for-lattes-smoothies.jpg",
    title: "Premium Grade",
    description:
      "An excellent choice for everyday consumption. It offers quality taste and vibrant color while being more affordable than ceremonial grade. Ideal for lattes, smoothies, and cooking.",
    features: ["High quality", "Great for beverages", "Good value"],
  },
]

export function Types() {
  return (
    <section id="types" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-primary mb-12 text-center">Matcha Grades</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {gradeTypes.map((grade, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={grade.image || "/placeholder.svg"}
                  alt={grade.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-primary mb-3">{grade.title}</h4>
                <p className="text-black leading-relaxed mb-4">{grade.description}</p>
                <ul className="space-y-2 text-sm text-black">
                  {grade.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
