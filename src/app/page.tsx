'use client'

import { useState } from 'react'
import Link from 'next/link'
import Hero from '@/components/Hero'
import IdeaValidator from '@/components/IdeaValidator'

export default function HomePage() {
  const [showDemo, setShowDemo] = useState(false)

  const features = [
    {
      icon: '🧠',
      title: 'AI Idea Validation',
      description: 'Få din affärsidé analyserad av AI och få poäng på marknadspotential, konkurrens och genomförbarhet.',
      href: '/validate',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: '📊',
      title: 'Smart Pitch Deck',
      description: 'Generera professionella pitch decks automatiskt baserat på din affärsidé och målgrupp.',
      href: '/pitch',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: '💰',
      title: 'Funding Match',
      description: 'Hitta rätt investerare för din startup med AI-driven matchmaking baserat på bransch och fas.',
      href: '/funding',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: '👥',
      title: 'Mentor Connect',
      description: 'Koppla upp dig med erfarna entreprenörer och branschexperter som kan vägleda din resa.',
      href: '/mentors',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: '📈',
      title: 'Growth Dashboard',
      description: 'Spåra dina framsteg, nyckeltal och milstolpar på en plats med smart analytics.',
      href: '/dashboard',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: '🎓',
      title: 'Learn Hub',
      description: 'Tillgång till kurser, guider och resurser för att utveckla dina entreprenöriella färdigheter.',
      href: '/learn',
      color: 'from-teal-500 to-green-600'
    }
  ]

  const stats = [
    { number: '2,547', label: 'Startups Accelerated', icon: '🚀' },
    { number: '€45M', label: 'Total Funding Raised', icon: '💰' },
    { number: '87%', label: 'Success Rate', icon: '📈' },
    { number: '150+', label: 'Expert Mentors', icon: '👨‍🏫' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      
      {/* Hero Section */}
      <Hero onShowDemo={() => setShowDemo(!showDemo)} />

      {/* AI Demo Section */}
      {showDemo && (
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                🎯 Testa vår AI-validering nu!
              </h2>
              <p className="text-xl text-blue-100">
                Se hur vår AI analyserar affärsidéer på sekunder
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <IdeaValidator />
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resultat som talar för sig själva
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              StartGogo har hjälpt tusentals entreprenörer att realisera sina drömmar
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🚀 Allt du behöver för att lyckas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Från idé till framgång - vår AI-drivna plattform guidar dig genom hela resan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300">
                  <span>Utforska</span>
                  <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Redo att förvandla din idé till verklighet? 🚀
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Gå med i tusentals entreprenörer som redan använder StartGogo för att accelerera sina startups
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/validate"
              className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              🎯 Validera Min Idé
            </Link>
            <button
              onClick={() => setShowDemo(!showDemo)}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 border border-white/20 backdrop-blur-sm"
            >
              {showDemo ? '⬆️ Dölj Demo' : '🎮 Se AI Demo'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}