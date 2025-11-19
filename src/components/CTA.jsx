import React from 'react'

function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400 p-[1px] shadow-2xl">
          <div className="rounded-3xl bg-slate-950/80 px-8 py-12 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Připraveni navýšit konverze?</h3>
            <p className="mt-3 text-slate-200">Spusťte první kampaň během pár minut a nechte AI recepční pracovat za vás.</p>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <input type="email" required placeholder="Váš firemní e‑mail" className="w-full sm:w-[360px] rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400" />
              <button className="rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-violet-100 transition-colors">Vytvořit účet</button>
            </form>
            <p className="mt-4 text-xs text-slate-400">14 dní zdarma • Není potřeba karta</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
