'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Utensils, FlaskConical, Brain, Scale, Flame } from 'lucide-react'
import mrTreinoGym from '../assets/mr-treino-gym.png'

const topics = [
  {
    icon: Dumbbell,
    title: 'Treino & Técnica',
    description: 'Aprenda a executar exercícios corretamente e montar seu treino.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Utensils,
    title: 'Alimentação Saudável',
    description: 'Dicas de nutrição sem neura, dieta flexível que funciona.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FlaskConical,
    title: 'Suplementos sem Bullshit',
    description: 'O que funciona, o que não funciona. Sem enganação.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'Motivação Realista',
    description: 'Consistência > Intensidade. Mentalidade para o longo prazo.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Scale,
    title: 'Mitos vs Realidade',
    description: 'Desvendando as mentiras do mundo fitness.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Flame,
    title: 'Lifestyle Fitness',
    description: 'Como viver fitness sem virar escravo da academia.',
    color: 'from-fitness-red to-red-600',
  },
]

export function ContentTopics() {
  return (
    <section id="aprenda" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fitness-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left flex-1"
          >
            <span className="text-fitness-red font-bold text-sm uppercase tracking-widest mb-4 block">
              O Que Você Vai Aprender
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-4 sm:mb-6">
              CONTEÚDO<br />
              <span className="text-fitness-red">DE VERDADE</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl">
              Temas que realmente importam para quem quer evoluir no fitness. 
              Sem fórmulas mágicas, sem promessas falsas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 hidden lg:block"
          >
            <img 
              src={mrTreinoGym} 
              alt="Mr. Treino na Academia" 
              className="w-full max-w-xl rounded-2xl drop-shadow-2xl object-cover"
            />
          </motion.div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 h-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <topic.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
                <p className="text-white/60 leading-relaxed">{topic.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}