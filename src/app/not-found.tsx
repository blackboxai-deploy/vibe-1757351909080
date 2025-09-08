import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-4xl text-white">📄</span>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 to-amber-800 bg-clip-text text-transparent mb-4">
            Sidan hittades inte
          </h2>
          <p className="text-gray-600 mb-8">
            Den sida du letar efter verkar inte existera. Kanske har du skrivit fel URL eller så har sidan flyttats?
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            🏠 Tillbaka till startsidan
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Eller välj en av våra populära tjänster:</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Link 
              href="/editor/anstallningsintyg"
              className="bg-white hover:bg-gray-50 text-gray-700 font-medium px-4 py-3 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-300 text-sm"
            >
              📄 Anställningsintyg
            </Link>
            <Link 
              href="/editor/hyresavi"
              className="bg-white hover:bg-gray-50 text-gray-700 font-medium px-4 py-3 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-300 text-sm"
            >
              🏠 Hyresavi
            </Link>
            <Link 
              href="/editor/lakarintyg"
              className="bg-white hover:bg-gray-50 text-gray-700 font-medium px-4 py-3 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-300 text-sm"
            >
              🏥 Läkarintyg
            </Link>
            <Link 
              href="/editor/kontoutdrag"
              className="bg-white hover:bg-gray-50 text-gray-700 font-medium px-4 py-3 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-300 text-sm"
            >
              🏦 Kontoutdrag
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Behöver du hjälp? Kontakta oss på support@dokumentpro.se
          </p>
        </div>
      </div>
    </div>
  )
}