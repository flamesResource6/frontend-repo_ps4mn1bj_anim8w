import React from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '990 Kč',
    period: '/měs.',
    features: ['1 číslo AI recepční', 'Až 1 000 SMS/měsíc', 'Základní automatizace', 'E-mailová podpora']
  },
  {
    name: 'Growth',
    price: '2 490 Kč',
    period: '/měs.',
    featured: true,
    features: ['3 čísla AI recepční', 'Až 5 000 SMS/měsíc', 'Pokročilá pravidla', 'Prioritní podpora']
  },
  {
    name: 'Scale',
    price: 'Na dotaz',
    period: '',
    features: ['Neomezené linky', 'Vysoké objemy SMS', 'SLA a onboarding', 'Vyhrazený konzultant']
  }
]

function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_90%_20%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Jednoduché a férové ceny</h2>
          <p className="mt-3 text-slate-300">Vyberte plán, který roste s vámi</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`${p.featured ? 'bg-white text-slate-900' : 'bg-slate-900/60 text-white border border-white/10'} rounded-2xl p-6 shadow-xl`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                {p.featured && (
                  <span className="text-xs font-semibold bg-slate-900/10 px-2 py-1 rounded-md">Nejoblíbenější</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="opacity-70">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className={`h-5 w-5 grid place-items-center rounded-full ${p.featured ? 'bg-slate-900 text-white' : 'bg-white/10 text-white'}`}>
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold ${p.featured ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 hover:bg-violet-100'} transition-colors`}>
                Začít
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
