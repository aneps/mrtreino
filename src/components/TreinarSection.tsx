'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Heart } from 'lucide-react'
import mrTreinoTreinar from '../assets/mr-treino-treinar.png'

export function TreinarSection() {
  return (
    <section id="treinar" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative flex justify-center lg:justify-start">
              <img 
                src={mrTreinoTreinar} 
                alt="Mr. Treino - TREINAR!" 
                className="w-full max-w-full sm:max-w-[480px] lg:max-w-xl mx-auto lg:mx-0 rounded-2xl drop-shadow-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* Content - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-fitness-red font-bold text-sm uppercase tracking-widest mb-4 block">
              A Mentalidade
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-4 sm:mb-6">
              TREINAR!<br />
              <span className="text-fitness-red">É A RESPOSTA</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed">
              Dia ruim, desculpa, preguiça — <strong className="text-white">treinar</strong> é o que te move. 
              Força e disposição vêm da consistência, não do céu.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/60 mb-8 sm:mb-10 leading-relaxed">
              Cada sessão conta. Cada repetição. Cada escolha.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <Zap className="w-5 h-5 text-fitness-red flex-shrink-0" />
                <span className="text-white font-semibold text-sm">Energia</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <Target className="w-5 h-5 text-fitness-red flex-shrink-0" />
                <span className="text-white font-semibold text-sm">Foco</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <Heart className="w-5 h-5 text-fitness-red flex-shrink-0" />
                <span className="text-white font-semibold text-sm">Saúde</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
