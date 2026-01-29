'use client'

import { motion } from 'framer-motion'
import { Youtube, Sparkles } from 'lucide-react'
import mrTreinoLogo from '../assets/mr-treino-logo.png'

export function ContactFitness() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-fitness-red/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <img 
              src={mrTreinoLogo} 
              alt="Mr. Treino" 
              className="w-32 h-32 mx-auto rounded-full shadow-2xl shadow-fitness-red/20"
            />
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-fitness-red/20 border border-fitness-red/50 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-fitness-red" />
              <span className="text-fitness-red font-semibold text-sm uppercase tracking-wider">
                Vem Treinar Comigo!
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6">
              BORA<br />
              <span className="text-fitness-red">COMEÇAR?</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
              Se inscreva no canal e faça parte da maior comunidade de fitness sem frescura do Brasil!
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-fitness-red text-white font-bold text-xl px-10 py-5 rounded-full hover:bg-red-600 transition-all shadow-2xl shadow-fitness-red/30"
            >
              <Youtube className="w-7 h-7" />
              INSCREVA-SE NO YOUTUBE
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
