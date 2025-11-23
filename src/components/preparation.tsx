"use client"

import { useState } from "react"
import { Thermometer, Percent, Coffee, Zap, Heart } from "lucide-react"

const steps = [
  {
    step: "1",
    title: "Heat Your Water",
    description:
      "Warm water to 160-170°F (70-75°C). Water that is too hot can damage the delicate matcha leaves, creating a bitter taste.",
    icon: <Thermometer className="w-8 h-8 text-white" />,
  },
  {
    step: "2",
    title: "Sift the Matcha",
    description:
      "Use a fine sifter to break up any clumps in the matcha powder. This ensures a smooth, lump-free preparation and vibrant green color.",
    icon: <Percent className="w-8 h-8 text-white" />,
  },
  {
    step: "3",
    title: "Add Matcha to Bowl",
    description:
      "Place 1-2 teaspoons of sifted matcha into a traditional bowl (chawan). Adjust the amount based on your preference for strength.",
    icon: <Coffee className="w-8 h-8 text-white" />,
  },
  {
    step: "4",
    title: "Whisk Vigorously",
    description:
      "Using a bamboo whisk (chasen), add a small amount of hot water and whisk in an M-shaped motion until frothy and smooth. This takes about 30 seconds.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
  {
    step: "5",
    title: "Enjoy Mindfully",
    description:
      "Pour remaining hot water and savor your matcha slowly. The preparation ritual itself is as important as the tea itself in Japanese tradition.",
    icon: <Heart className="w-8 h-8 text-white" />,
  },
]

export function Preparation() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  return (
    <section id="preparation" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">
          Traditional Preparation
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-transform transition-shadow cursor-pointer"
              onClick={() => toggleCategory(`step-${idx}`)}
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 relative w-16 h-16 rounded-full bg-linear-to-br from-primary/80 to-primary/40 flex items-center justify-center">
                  {item.icon}
                  <span className="absolute -top-2 -right-2 bg-primary-foreground text-primary font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow">
                    {item.step}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-semibold text-black mb-2">{item.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
