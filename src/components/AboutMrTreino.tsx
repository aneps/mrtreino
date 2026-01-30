'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Users, Sparkles } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'
import mrTreinoPointing from '../assets/mr-treino-pointing.png'

const VALUE_KEYS = ['noExtremes', 'science', 'forAll', 'noFluff'] as const
const VALUE_ICONS = [Heart, Target, Users, Sparkles]

export function AboutMrTreino() {
  const { t } = useTranslation()
  const values = VALUE_KEYS.map((key, i) => ({
    icon: VALUE_ICONS[i],
    title: t(`about.values.${key}.title`),
    description: t(`about.values.${key}.desc`),
  }))
  return (
    <section id="sobre" className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-visible"
          >
            <div className="relative flex justify-center overflow-hidden lg:overflow-visible">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-fitness-red/20 rounded-full blur-3xl scale-75" />
              <img 
                src={mrTreinoPointing} 
                alt="Mr. Treino"
                className="relative w-full max-w-full sm:max-w-[480px] md:max-w-md mx-auto drop-shadow-2xl md:scale-[1.5] lg:scale-[2.5] origin-center"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-fitness-red font-bold text-sm uppercase tracking-widest mb-4 block">
              {t('about.label')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-4 sm:mb-6">
              {t('about.title')}<br />
              <span className="text-fitness-red">{t('about.titleHighlight')}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed">
              <Trans i18nKey="about.p1" components={{ strong: <strong className="text-white" /> }} />
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/60 mb-8 sm:mb-10 leading-relaxed">
              {t('about.p2')}
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all"
                >
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-fitness-red mb-2" />
                  <h3 className="font-bold text-white text-sm mb-1">{value.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}