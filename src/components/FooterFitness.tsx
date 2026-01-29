'use client'

import { Youtube, Instagram } from 'lucide-react'
import mrTreinoLogo from '../assets/mr-treino-logo.png'
import { URLS } from '../lib/constants'

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export function FooterFitness() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img src={mrTreinoLogo} alt="Mr. Treino" className="w-10 h-10 rounded-full" />
            <span className="font-black text-white text-xl">MR. TREINO</span>
          </div>

          {/* Tagline */}
          <p className="text-white/60 text-center">
            Treino, Nutrição & Motivação — Sem frescura, com ciência.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a 
              href={URLS.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-fitness-red transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href={URLS.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={URLS.tiktok} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Mr. Treino. Todos os direitos reservados. 
            <span className="text-fitness-red ml-2">💪 Bora.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
