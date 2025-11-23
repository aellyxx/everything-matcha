"use client"

const historyCards = [
  {
    title: "Ancient Origins",
    description:
      "Matcha traces its roots back to China during the Tang Dynasty. Buddhist monks valued the green tea for its ability to enhance meditation and focus during long spiritual practices.",
  },
  {
    title: "Japanese Evolution",
    description:
      "Japanese monks brought matcha to Japan in the 9th century. It became central to the development of the Zen Buddhist tradition and the Japanese tea ceremony (chanoyu).",
  },
  {
    title: "Modern Culture",
    description:
      "Today, matcha remains a symbol of Japanese cultural heritage. It's embraced worldwide for its ceremonial significance and remarkable health properties.",
  },
]

export function History() {
  return (
    <section id="history" className="py-30 px-6 border-t border-border bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-primary mb-12 text-center">
          History & Origin
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {historyCards.map((card, idx) => (
            <div
              key={idx}
              className="border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-bold text-black mb-3">{card.title}</h4>
              <p className="text-black leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
