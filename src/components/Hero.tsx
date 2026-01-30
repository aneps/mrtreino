'use client'

import { motion } from 'framer-motion'
import { Menu, X, Youtube, Instagram, Volume2, VolumeX } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import mrTreinoLogo from '../assets/mr-treino-logo.png'
import { URLS } from '../lib/constants'
import { SUPPORTED_LANGUAGES, type SupportedLocale } from '../i18n'

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const NAV_SECTIONS: { id: string; key: string }[] = [
  { id: 'sobre', key: 'nav.sobre' },
  { id: 'conteúdo', key: 'nav.conteudo' },
  { id: 'treinar', key: 'nav.treinar' },
  { id: 'aprenda', key: 'nav.aprenda' },
  { id: 'redes', key: 'nav.redes' },
]

export function Hero() {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const langMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setIsLanguageOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0
      videoRef.current.muted = true
      videoRef.current.defaultMuted = true
      videoRef.current.play().catch(console.error)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!audioRef.current) return
    if (isMuted) {
      audioRef.current.pause()
    } else {
      audioRef.current.volume = 0.7
      audioRef.current.loop = true
      audioRef.current.play().catch(console.error)
    }
  }, [isMuted])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const setLanguage = (lng: SupportedLocale) => {
    i18n.changeLanguage(lng)
    setIsLanguageOpen(false)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Audio - plays when unmuted */}
      <audio ref={audioRef} src="/audio.mp3" preload="auto" />

      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setIsVideoLoaded(true)}
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
      </video>

      {/* Video Loading Overlay - Full page, on top of everything */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isVideoLoaded ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black ${isVideoLoaded ? 'pointer-events-none' : ''}`}
      >
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative flex flex-col items-center gap-4 sm:gap-6"
        >
          {/* Rotating glow rings - smaller on mobile */}
          
          {/* Logo with glow - smaller on mobile */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-fitness-red/30 blur-xl scale-150 animate-pulse" />
            <img
              src={mrTreinoLogo}
              alt="Mr. Treino"
              className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full drop-shadow-2xl ring-4 ring-fitness-red/20"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src={mrTreinoLogo} alt="Mr. Treino" className="w-12 h-12 rounded-full" />
              <span className="font-black text-white text-2xl tracking-tight">MR. TREINO</span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_SECTIONS.map(({ id, key }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-white/90 hover:text-white font-semibold uppercase tracking-wide text-sm transition-colors"
                >
                  {t(key)}
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <div className="relative" ref={langMenuRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all text-xl leading-none"
                  aria-label={t('ariaLanguage')}
                  title={t('language')}
                >
                  {SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language)?.flag ?? '🇧🇷'}
                </button>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 top-full mt-2 py-2 w-40 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl z-[200]"
                  >
                    {SUPPORTED_LANGUAGES.map(({ code, label, flag }) => (
                      <button
                        key={code}
                        onClick={() => setLanguage(code)}
                        className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-colors flex items-center gap-2 ${
                          i18n.language === code
                            ? 'text-fitness-red bg-white/10'
                            : 'text-white/90 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className="text-lg">{flag}</span>
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
                aria-label={isMuted ? t('hero.ariaSoundOn') : t('hero.ariaSoundOff')}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <motion.a
                href={URLS.youtubeSubscribe}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 bg-fitness-red text-white font-bold px-6 py-3 rounded-full hover:bg-red-600 transition-all"
              >
                <Youtube className="w-5 h-5" />
                {t('nav.inscrevaSe')}
              </motion.a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-3 rounded-full bg-white/10 text-white"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl z-[105] p-8"
          >
            <div className="flex flex-col gap-6 mt-20">
              {NAV_SECTIONS.map(({ id, key }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-white text-xl font-bold uppercase tracking-wide text-left py-3 border-b border-white/10"
                >
                  {t(key)}
                </button>
              ))}
              <a
                href={URLS.youtubeSubscribe}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fitness-red text-white font-bold px-6 py-4 rounded-full mt-4 text-center flex items-center justify-center gap-2"
              >
                <Youtube className="w-5 h-5" />
                {t('nav.inscrevaSe')}
              </a>
            </div>
          </motion.div>
        </>
      )}

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center z-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            {/* Badge
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-fitness-red/20 border border-fitness-red/50 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-fitness-red rounded-full animate-pulse" />
              <span className="text-fitness-red font-semibold text-sm uppercase tracking-wider">
                Conteúdo Fitness Gratuito
              </span>
            </motion.div> */}

            {/* Main Title - smaller on mobile */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] mb-4 sm:mb-6">
              <span className="block">{t('hero.title1')}</span>
              <span className="block">{t('hero.title2')}</span>
              <span className="block text-fitness-red">{t('hero.title3')}</span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-white/80 max-w-xl mb-6 sm:mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* Social CTA Buttons - smaller on mobile */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <motion.a
                href={URLS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-fitness-red text-white font-bold text-sm sm:text-lg px-5 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-red-600 transition-all flex items-center gap-2 sm:gap-3 shadow-2xl shadow-red-500/30"
              >
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
                {t('hero.watchYouTube')}
              </motion.a>
              
              <motion.a
                href={URLS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold text-sm sm:text-lg px-5 py-3 sm:px-8 sm:py-4 rounded-full transition-all flex items-center gap-2 sm:gap-3"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                INSTAGRAM
              </motion.a>
              
              <motion.a
                href={URLS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-sm sm:text-lg px-5 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-white/20 transition-all flex items-center gap-2 sm:gap-3"
              >
                <TikTokIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                TIKTOK
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/80 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  )
}
