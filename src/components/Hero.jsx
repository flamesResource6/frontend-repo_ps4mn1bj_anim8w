import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center py-28">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Zvyšte prodeje s AI recepční a SMS retargetingem
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl"
            >
              Naše platforma automaticky kontaktuje vaše minulé zákazníky a 24/7 AI recepční spolehlivě zvedá telefon. Žádný lead vám už neuteče.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 text-sm font-semibold hover:bg-violet-100 transition-colors">Vyzkoušet zdarma</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-slate-900/70 border border-white/10 text-white px-6 py-3 text-sm font-semibold hover:bg-slate-900/90 transition-colors">Prohlédnout funkce</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 flex items-center gap-4 text-slate-300"
            >
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/36?img=1" className="h-9 w-9 rounded-full border border-white/20" />
                <img src="https://i.pravatar.cc/36?img=2" className="h-9 w-9 rounded-full border border-white/20" />
                <img src="https://i.pravatar.cc/36?img=3" className="h-9 w-9 rounded-full border border-white/20" />
              </div>
              <p className="text-sm">Přes 300 firem již zvýšilo konverze</p>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-800/60 border border-white/10 p-4">
                  <p className="text-4xl font-bold text-white">+23%</p>
                  <p className="text-xs text-slate-300">Vyšší míra zpětných objednávek</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-white/10 p-4">
                  <p className="text-4xl font-bold text-white">24/7</p>
                  <p className="text-xs text-slate-300">AI recepční zvedá každý hovor</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-white/10 p-4">
                  <p className="text-4xl font-bold text-white">-60%</p>
                  <p className="text-xs text-slate-300">Méně zmeškaných příležitostí</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-white/10 p-4">
                  <p className="text-4xl font-bold text-white">2 min</p>
                  <p className="text-xs text-slate-300">Nastavení bez IT znalostí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
