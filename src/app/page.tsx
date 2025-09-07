import { LogoGenerator } from '@/components/LogoGenerator';
import { PhilosophyDisplay } from '@/components/PhilosophyDisplay';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                HUT DESA KE-33
              </span>
            </h1>
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                Seni dan Budaya
              </p>
              <p className="text-lg text-gray-600">
                Generator Logo AI - Desain Modern dengan Nilai Filosofi
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-full"></div>
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white border-opacity-30">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-amber-900">10 Oktober 2025</p>
                <p className="text-amber-800">Perayaan Kemerdekaan Desa</p>
                <p className="text-sm text-amber-700 font-medium">Designed by ABY SYA'BI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Generator */}
        <section id="generator">
          <LogoGenerator />
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="py-8">
          <PhilosophyDisplay />
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-amber-200 bg-white bg-opacity-30 backdrop-blur-sm rounded-2xl">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-amber-900">
                Logo Generator HUT Desa ke-33
              </h3>
              <p className="text-amber-800">
                Tema: Seni dan Budaya | AI-Powered Design
              </p>
            </div>
            
            <div className="flex justify-center items-center space-x-8 text-sm text-amber-700">
              <div className="flex items-center space-x-2">
                <span>🎨</span>
                <span>Modern Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⚡</span>
                <span>AI-Generated</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <span>HD Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🏛️</span>
                <span>Cultural Heritage</span>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="text-amber-600 font-medium">
                © 2025 ABY SYA'BI - Logo Design Specialist
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}