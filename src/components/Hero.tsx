interface HeroProps {
  onShowDemo: () => void
}

export default function Hero({ onShowDemo }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              🚀 AI-Powered Startup Accelerator
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Förvandla Din</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Startup-Idé
            </span>
            <span className="block">till Framgång</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            StartGogo kombinerar AI-driven validering, smart pitch-generering och expertmentorskap 
            för att accelerera din entrepreneuriella resa från idé till exit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={onShowDemo}
              className="group bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center justify-center">
                <span className="mr-2 group-hover:animate-bounce">🎯</span>
                Testa AI-Validering
              </span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 border border-white/20 backdrop-blur-sm">
              <span className="flex items-center justify-center">
                <span className="mr-2">🎥</span>
                Se Demo Video
              </span>
            </button>
          </div>

          {/* Key Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: '⚡',
                title: 'AI-Validering på Sekunder',
                description: 'Få omedelbar feedback på din affärsidé'
              },
              {
                icon: '💰',
                title: 'Smart Investor Matching',
                description: 'Hitta rätt finansiering automatiskt'
              },
              {
                icon: '🎓',
                title: 'Expert Mentorskap',
                description: 'Tillgång till erfarna entreprenörer'
              }
            ].map((prop, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">{prop.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{prop.title}</h3>
                <p className="text-blue-100 text-sm">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-32 h-32 bg-pink-400 opacity-20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-cyan-400 opacity-20 rounded-full animate-ping"></div>
      </div>
    </section>
  )
}