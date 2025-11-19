import React from 'react'
import { Bot, MessageSquare, PhoneCall, CheckCircle2, Clock, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: MessageSquare,
    title: 'Automatické SMS kampaně',
    desc: 'Znovu aktivujte své bývalé zákazníky personalizovanými SMS ve správný čas.'
  },
  {
    icon: PhoneCall,
    title: 'AI recepční 24/7',
    desc: 'Nikdy nezmeškáte hovor. Virtuální recepční odpoví, kvalifikuje a přesměruje.'
  },
  {
    icon: Bot,
    title: 'Chytrá automatizace',
    desc: 'Pravidla a scénáře na pár kliknutí. Bez nutnosti programování.'
  },
  {
    icon: BarChart3,
    title: 'Přehledné statistiky',
    desc: 'Dopad na tržby a konverze v reálném čase v přehledných grafech.'
  },
  {
    icon: Clock,
    title: 'Okamžité nasazení',
    desc: 'Propojte CRM, importujte kontakty a spusťte kampaně během minut.'
  },
  {
    icon: CheckCircle2,
    title: 'GDPR-ready',
    desc: 'Bezpečné zpracování dat a jednoduché odhlášení pro vaše klienty.'
  }
]

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Vše pro růst prodejů</h2>
          <p className="mt-3 text-slate-300">Moderní nástroje, které pracují za vás</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:bg-slate-900/70 transition-colors"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 text-white grid place-items-center mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-slate-300 mt-1 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
