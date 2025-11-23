"use client"

export function Footer() {
  return (
    <footer className="border-t border-border py-6 px-6 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">抹</span>
          </div>
          <span className="font-bold text-foreground text-lg">Everything Matcha</span>
        </div>
        <p className="text-foreground/60 text-sm mb-1">
          Celebrating the art and culture of matcha.
        </p>
        <p className="text-foreground/50 text-xs">
          © 2025 Everything Matcha. Dedicated to preserving and sharing the beauty of matcha culture.
        </p>
      </div>
    </footer>
  )
}
