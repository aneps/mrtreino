'use client'

import { motion } from 'framer-motion'
import { Youtube, Instagram, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import mrTreinoLogo from '../assets/mr-treino-logo.png'
import { URLS, SOCIAL_HANDLE } from '../lib/constants'

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const SOCIAL_KEYS = ['youtube', 'instagram', 'tiktok'] as const
const SOCIAL_ICONS = [Youtube, Instagram, TikTokIcon]
const SOCIAL_GRADIENTS = [
  'from-red-600 to-red-500',
  'from-purple-500 via-pink-500 to-orange-500',
  'from-cyan-400 via-white to-pink-500',
]
const SOCIAL_HOVER = ['hover:bg-red-600/20', 'hover:bg-pink-500/20', 'hover:bg-white/20']
const SOCIAL_HREFS = [URLS.youtube, URLS.instagram, URLS.tiktok]
const SOCIAL_NAMES = ['YouTube', 'Instagram', 'TikTok']

export function SocialSection() {
  const { t } = useTranslation()
  const socials = SOCIAL_KEYS.map((key, i) => ({
    name: SOCIAL_NAMES[i],
    icon: SOCIAL_ICONS[i],
    description: t(`social.${key}.desc`),
    cta: t(`social.${key}.cta`),
    href: SOCIAL_HREFS[i],
    gradient: SOCIAL_GRADIENTS[i],
    hoverBg: SOCIAL_HOVER[i],
  }))
  return (
    <section id="redes" className="relative py-24 bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fitness-red/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-fitness-red font-bold text-sm uppercase tracking-widest mb-4 block">
            {t('social.label')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-6">
            {t('social.title')}<br />
            <span className="text-fitness-red">{t('social.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t('social.p')}
          </p>
        </motion.div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 ${social.hoverBg} hover:border-white/20`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {typeof social.icon === 'function' && social.name === 'TikTok' ? (
                  <social.icon className="w-8 h-8 text-black" />
                ) : (
                  <social.icon className="w-8 h-8 text-white" />
                )}
              </div>

              <h3 className="text-2xl font-black text-white mb-2">{social.name}</h3>
              <p className="text-white/60 mb-6 leading-relaxed">{social.description}</p>

              <span className="inline-flex items-center gap-2 text-fitness-red font-bold uppercase tracking-wide group-hover:gap-3 transition-all">
                {social.cta}
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Logo Badge */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-8 py-4">
            <img src={mrTreinoLogo} alt="Mr. Treino" className="w-12 h-12 rounded-full" />
            <span className="text-white font-bold text-lg">{SOCIAL_HANDLE}</span>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}