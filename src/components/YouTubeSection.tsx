'use client'

import { motion } from 'framer-motion'
import { Youtube, Play, Bell, ThumbsUp, Users } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'
import mrTreinoBench from '../assets/mr-treino-bench.png'
import { URLS } from '../lib/constants'

const STAT_KEYS = ['community', 'videos', 'free'] as const
const STAT_VALUE_KEYS = ['growing', 'weekly', 'percent'] as const
const STAT_ICONS = [Users, Play, ThumbsUp]

export function YouTubeSection() {
  const { t } = useTranslation()
  const stats = STAT_KEYS.map((labelKey, i) => ({
    icon: STAT_ICONS[i],
    value: t(`youtube.statsValue.${STAT_VALUE_KEYS[i]}`),
    label: t(`youtube.stats.${labelKey}`),
  }))
  return (
    <section id="conteúdo" className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-black" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-fitness-red/20 border border-fitness-red/50 rounded-full px-4 py-2 mb-6">
              <Youtube className="w-5 h-5 text-fitness-red" />
              <span className="text-fitness-red font-semibold text-sm uppercase tracking-wider">
                {t('youtube.badge')}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-4 sm:mb-6">
              {t('youtube.title')}<br />
              <span className="text-fitness-red">{t('youtube.titleHighlight')}</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed">
              <Trans i18nKey="youtube.p" components={{ strong: <strong className="text-white" /> }} />
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-fitness-red mx-auto mb-2" />
                  <div className="text-lg font-black text-white">{stat.value}</div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={URLS.youtubeSubscribe}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-fitness-red text-white font-bold text-sm sm:text-lg px-5 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-red-600 transition-all flex items-center gap-2 sm:gap-3 shadow-2xl shadow-red-500/30"
              >
                <Youtube className="w-6 h-6" />
                {t('youtube.subscribe')}
              </motion.a>
              
              <motion.a
                href={URLS.youtubeSubscribe}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-sm sm:text-lg px-5 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-white/20 transition-all flex items-center gap-2 sm:gap-3"
              >
                <Bell className="w-5 h-5" />
                {t('youtube.notifications')}
              </motion.a>
            </div>
          </motion.div>

          {/* Image / Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8 overflow-hidden">
              {/* Fake YouTube Player */}
              <div className="relative aspect-video bg-black/50 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={mrTreinoBench} 
                  alt="Mr. Treino no Supino" 
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
<motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 sm:w-20 sm:h-20 bg-fitness-red rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50 cursor-pointer"
          >
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-0.5 sm:ml-1 fill-current" />
                  </motion.div>
                </div>
              </div>

              {/* Fake Video Info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-fitness-red rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-black text-white text-lg">MT</span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">
                    {t('youtube.videoTitle')}
                  </h3>
                  <p className="text-white/60 text-sm">{t('youtube.videoSubtitle')}</p>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-fitness-red/10 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}