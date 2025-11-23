import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <>
      <section id="home"className="pt-20 pb-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight text-balance">
              The Art of Matcha
            </h2>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Discover the centuries-old tradition of Japanese matcha. From the misty mountains of Japan to your cup,
              explore the culture, craftsmanship, and wellness benefits that make matcha a timeless treasure.
            </p>
            <Link href="/history">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                Explore Matcha
              </button>
            </Link>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/traditional-matcha-bowl-with-whisk-on-white-surfac.jpg"
              alt="Traditional matcha ceremony bowl and whisk"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>
    </>
  )
}
