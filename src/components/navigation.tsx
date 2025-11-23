"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-lg font-bold">抹</span>
          </div>
          <h1 className="text-2xl font-bold text-primary">Everything Matcha</h1>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-black hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/history" className="text-black hover:text-primary transition-colors">
            History
          </Link>
          <Link href="/types" className="text-black hover:text-primary transition-colors">
            Types
          </Link>
          <Link href="/preparation" className="text-black hover:text-primary transition-colors">
            Preparation
          </Link>
          <Link href="/benefits" className="text-black hover:text-primary transition-colors">
            Benefits
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="text-black hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/history" className="text-black hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
              History
            </Link>
            <Link href="/types" className="text-black hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
              Types
            </Link>
            <Link href="/preparation" className="text-black hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
              Preparation
            </Link>
            <Link href="/benefits" className="text-black hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
              Benefits
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
