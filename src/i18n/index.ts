import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ptBR from './locales/pt-BR.json'
import en from './locales/en.json'
import es from './locales/es.json'

export const SUPPORTED_LANGUAGES = [
  { code: 'pt-BR', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
] as const

export type SupportedLocale = (typeof SUPPORTED_LANGUAGES)[number]['code']

const resources = {
  'pt-BR': { translation: ptBR },
  en: { translation: en },
  es: { translation: es },
}

const saved = localStorage.getItem('mrtreino-locale') as SupportedLocale | null
const initial =
  saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved) ? saved : 'pt-BR'

i18n.use(initReactI18next).init({
  resources,
  lng: initial,
  fallbackLng: 'pt-BR',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('mrtreino-locale', lng)
  document.documentElement.lang = lng
})

document.documentElement.lang = initial
