const benefits = [
  {
    title: "Rich in Antioxidants",
    description: "Packed with catechins and chlorophyll that support cellular health and vitality.",
  },
  {
    title: "Sustained Energy",
    description: "L-theanine and caffeine provide calm, focused energy without the jitters.",
  },
  {
    title: "Enhanced Focus",
    description: "Promotes mental clarity and concentration, favored by monks for meditation.",
  },
  {
    title: "Metabolism Support",
    description: "May support healthy metabolism and weight management goals.",
  },
  {
    title: "Calm Alertness",
    description: 'The unique combination creates a state of relaxed awareness called "alert calm."',
  },
  {
    title: "Detoxification",
    description: "Chlorophyll content supports the body's natural detoxification processes.",
  },
  {
    title: "Heart Health",
    description: "Regular consumption may support cardiovascular health and circulation.",
  },
  {
    title: "Immune Support",
    description: "Rich polyphenols help support a healthy immune system response.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-primary mb-12 text-center">Health & Wellness Benefits</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-gray-50 border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-primary mb-2">{benefit.title}</h4>
              <p className="text-sm text-black leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
