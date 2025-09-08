import IdeaValidator from '@/components/IdeaValidator'

export default function ValidatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🧠 AI Idea Validation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Låt vår AI analysera din affärsidé och få omedelbar feedback på marknadspotential, 
            konkurrensläge och genomförbarhet.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <IdeaValidator />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 mb-4">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Analys</h3>
              <p className="text-sm text-gray-600">AI analyserar hundratals faktorer för att ge dig en komplett bedömning</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 mb-4">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Snabba Resultat</h3>
              <p className="text-sm text-gray-600">Få dina resultat på sekunder, inte veckor av marknadsanalys</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 mb-4">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">Handlingsplan</h3>
              <p className="text-sm text-gray-600">Få konkreta rekommendationer för nästa steg i din startup-resa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}