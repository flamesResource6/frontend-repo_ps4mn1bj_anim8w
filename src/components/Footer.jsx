import React from 'react'

function Footer() {
  return (
    <footer id="contact" className="relative py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} ProdejPilot. Všechna práva vyhrazena.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-300 hover:text-white">Zásady soukromí</a>
            <a href="#" className="text-slate-300 hover:text-white">Podmínky</a>
            <a href="mailto:hello@prodejpilot.cz" className="text-slate-300 hover:text-white">hello@prodejpilot.cz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
