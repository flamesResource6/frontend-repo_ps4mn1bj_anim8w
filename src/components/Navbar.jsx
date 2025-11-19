import React from 'react'
import { Menu, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#hero" className="inline-flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 flex items-center justify-center text-white shadow-[0_0_25px_rgba(168,85,247,0.45)]">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-white font-semibold tracking-tight group-hover:text-violet-200 transition-colors">ProdejPilot</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Funkce</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Ceny</a>
              <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Reference</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Kontakt</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-slate-300 hover:text-white text-sm">Přihlásit se</a>
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-violet-100 transition-colors">Začít zdarma</a>
            </div>

            <button className="md:hidden h-10 w-10 grid place-items-center text-slate-200">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
