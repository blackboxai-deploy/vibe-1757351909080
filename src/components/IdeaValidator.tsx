'use client'

import { useState } from 'react'

interface ValidationResult {
  score: number
  strengths: string[]
  weaknesses: string[]
  marketPotential: number
  competition: number
  feasibility: number
  recommendations: string[]
}

export default function IdeaValidator() {
  const [idea, setIdea] = useState('')
  const [isValidating, setIsValidating] = useState(false)
  const [result, setResult] = useState<ValidationResult | null>(null)

  const validateIdea = async () => {
    if (!idea.trim()) return
    
    setIsValidating(true)
    
    // Simulate AI analysis with realistic delay
    setTimeout(() => {
      const validation = analyzeBusinessIdea(idea)
      setResult(validation)
      setIsValidating(false)
    }, 2500)
  }

  const analyzeBusinessIdea = (businessIdea: string): ValidationResult => {
    const lowerIdea = businessIdea.toLowerCase()
    
    // AI analysis logic based on keywords and patterns
    let marketPotential = Math.floor(Math.random() * 40) + 60 // 60-100
    let competition = Math.floor(Math.random() * 50) + 30 // 30-80
    let feasibility = Math.floor(Math.random() * 30) + 70 // 70-100
    
    const strengths = []
    const weaknesses = []
    const recommendations = []
    
    // Market potential analysis
    if (lowerIdea.includes('app') || lowerIdea.includes('digital') || lowerIdea.includes('online')) {
      marketPotential += 10
      strengths.push('Digital scalability möjliggör global räckvidd')
      recommendations.push('Fokusera på användarupplevelse och mobile-first design')
    }
    
    if (lowerIdea.includes('ai') || lowerIdea.includes('artificial intelligence') || lowerIdea.includes('machine learning')) {
      marketPotential += 15
      feasibility -= 5
      strengths.push('AI-driven lösningar har hög marknadspotential')
      weaknesses.push('Kräver specialistkompetens inom AI/ML')
      recommendations.push('Säkerställ tillgång till AI-utvecklare och datavetare')
    }
    
    if (lowerIdea.includes('sustainability') || lowerIdea.includes('miljö') || lowerIdea.includes('green') || lowerIdea.includes('renewable')) {
      marketPotential += 12
      strengths.push('Miljöfokus matchar marknadstrender och investerarintresse')
      recommendations.push('Undersök möjligheter för grön finansiering och ESG-investerare')
    }
    
    if (lowerIdea.includes('b2b') || lowerIdea.includes('enterprise') || lowerIdea.includes('business')) {
      feasibility += 5
      strengths.push('B2B-modeller ofta mer förutsägbara och scalable')
      recommendations.push('Identifiera key accounts tidigt för snabbare tillväxt')
    }
    
    if (lowerIdea.includes('subscription') || lowerIdea.includes('saas') || lowerIdea.includes('recurring')) {
      marketPotential += 8
      strengths.push('Återkommande intäktsmodell ger förutsägbar kassaflöde')
      recommendations.push('Fokusera på customer retention och lifetime value')
    }
    
    // Competition analysis
    if (lowerIdea.includes('unique') || lowerIdea.includes('innovative') || lowerIdea.includes('first')) {
      competition -= 15
      strengths.push('Unik positionering kan ge konkurrensfördel')
    } else {
      competition += 10
      weaknesses.push('Konkurrenssituationen kräver tydlig differentiering')
      recommendations.push('Utveckla stark USP (Unique Selling Proposition)')
    }
    
    // Feasibility analysis
    if (lowerIdea.includes('experience') || lowerIdea.includes('expertise') || lowerIdea.includes('background')) {
      feasibility += 10
      strengths.push('Relevant branschexpertis ökar genomförbarheten')
    } else {
      weaknesses.push('Överväg att komplettera teamet med branschexpertis')
      recommendations.push('Rekrytera advisors eller partners med relevant erfarenhet')
    }
    
    // Default strengths and recommendations if none found
    if (strengths.length === 0) {
      strengths.push('Identifierar ett verkligt marknadsbehov')
      strengths.push('Tydlig vision för lösningen')
    }
    
    if (weaknesses.length === 0) {
      weaknesses.push('Behöver djupare marknadsanalys för validering')
      weaknesses.push('Kräver tydligare go-to-market strategi')
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Genomför användarintervjuer för att validera problemet')
      recommendations.push('Utveckla MVP för att testa marknadshypoteser')
    }
    
    // Ensure values are within bounds
    marketPotential = Math.min(100, Math.max(0, marketPotential))
    competition = Math.min(100, Math.max(0, competition))
    feasibility = Math.min(100, Math.max(0, feasibility))
    
    const overallScore = Math.round((marketPotential + (100 - competition) + feasibility) / 3)
    
    return {
      score: overallScore,
      strengths: strengths.slice(0, 3),
      weaknesses: weaknesses.slice(0, 3),
      marketPotential,
      competition,
      feasibility,
      recommendations: recommendations.slice(0, 3)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBackground = (score: number) => {
    if (score >= 80) return 'from-green-100 to-emerald-100'
    if (score >= 60) return 'from-yellow-100 to-orange-100'
    return 'from-red-100 to-pink-100'
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Beskriv din affärsidé detaljerat:
        </label>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Exempel: Jag vill skapa en AI-driven app för att hjälpa små företag att automatisera sin kundservice. Appen skulle använda natural language processing för att förstå kundfrågor och svara automatiskt, medan komplexa frågor routas till mänsklig support..."
          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32 text-gray-900 placeholder-gray-500"
          maxLength={1000}
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-gray-500">
            {idea.length}/1000 tecken
          </span>
          <span className="text-xs text-gray-500">
            Ju mer detaljer, desto bättre analys
          </span>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={validateIdea}
          disabled={!idea.trim() || isValidating}
          className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:cursor-not-allowed disabled:transform-none"
        >
          {isValidating ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              AI analyserar...
            </span>
          ) : (
            <span className="flex items-center">
              <span className="mr-2">🎯</span>
              Validera Min Idé
            </span>
          )}
        </button>
      </div>

      {/* Quick Demo Examples */}
      {!result && (
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <p className="text-sm text-blue-800 mb-3 font-medium">💡 Testa med dessa exempel:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              "AI-driven app för automatisk kundservice för små företag",
              "Sustainable packaging lösning för e-commerce med biologiskt nedbrytbara material",
              "B2B SaaS plattform för project management med AI-scheduling",
              "Mobile marketplace för lokala hantverkare och hemservice"
            ].map((example, index) => (
              <button
                key={index}
                onClick={() => setIdea(example)}
                className="text-left text-xs px-3 py-2 bg-white hover:bg-blue-50 text-blue-800 rounded-lg border border-blue-300 hover:border-blue-400 transition-all duration-300"
              >
                <span className="font-medium">{index + 1}.</span> {example.substring(0, 40)}...
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className={`bg-gradient-to-r ${getScoreBackground(result.score)} rounded-2xl p-8 border-2 border-blue-200`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 AI Validering Resultat
            </h3>
            <div className={`text-6xl font-bold ${getScoreColor(result.score)} mb-2`}>
              {result.score}
            </div>
            <p className="text-gray-600 font-medium">
              {result.score >= 80 ? '🚀 Stark affärsidé!' : result.score >= 60 ? '⚡ Lovande potential' : '⚠️ Behöver utveckling'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {result.marketPotential}
              </div>
              <p className="text-sm text-gray-600 font-medium">Marknadspotential</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {100 - result.competition}
              </div>
              <p className="text-sm text-gray-600 font-medium">Konkurrensfördel</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">
                {result.feasibility}
              </div>
              <p className="text-sm text-gray-600 font-medium">Genomförbarhet</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">💪</span>
                Styrkor
              </h4>
              <ul className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-sm text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">⚠️</span>
                Utmaningar
              </h4>
              <ul className="space-y-2">
                {result.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">⚡</span>
                    <span className="text-sm text-gray-700">{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">🎯</span>
              AI Rekommendationer
            </h4>
            <ul className="space-y-2">
              {result.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">→</span>
                  <span className="text-sm text-gray-700">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setIdea('')
                setResult(null)
              }}
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-300 transition-all duration-300"
            >
              🔄 Testa Ny Idé
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              🚀 Skapa Pitch Deck
            </button>
          </div>
        </div>
      )}
    </div>
  )
}