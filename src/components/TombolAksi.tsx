import React from 'react';
import { ExternalLink, Download, Eye, Zap } from 'lucide-react';

const TombolAksi: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-neon-lime mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold color-shift">
              SYSTEM_ACCESS
            </h2>
            <Zap className="w-8 h-8 text-neon-cyan ml-4" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-lime via-neon-cyan to-neon-magenta mx-auto mb-6"></div>
          <p className="text-xl text-cyber-gray max-w-2xl mx-auto">
            Akses sistem CV interaktif untuk pengalaman yang lebih mendalam
          </p>
        </div>

        <div className="glass rounded-3xl p-12 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-neon-cyan/20 rotate-45"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-neon-magenta/20 rotate-12"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-neon-lime animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-cyan animate-pulse"></div>
          </div>

          <div className="relative z-10">
            <div className="mb-8">
              <Eye className="w-16 h-16 text-neon-cyan mx-auto mb-4 floating" />
              <h3 className="text-3xl font-bold text-white mb-4 color-shift">
                CV Interaktif 3D
              </h3>
              <p className="text-cyber-gray leading-relaxed max-w-lg mx-auto">
                Jelajahi profil lengkap dengan visualisasi 3D yang interaktif, 
                dibangun dengan teknologi Three.js untuk pengalaman yang memukau.
              </p>
            </div>

            <div className="space-y-6">
              {/* Main CTA Button */}
              <a
                href="/cv-interaktif.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-bold text-lg rounded-xl shadow-lg hover:shadow-neon-cyan transition-all duration-300 transform hover:scale-105 group"
              >
                <ExternalLink className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Buka CV Interaktif
                <div className="ml-3 w-2 h-2 bg-black rounded-full animate-pulse"></div>
              </a>

              {/* Secondary actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-6 py-3 border-2 border-neon-lime text-neon-lime font-semibold rounded-lg hover:bg-neon-lime hover:text-black transition-all duration-300 transform hover:scale-105">
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </button>
                
                <button className="inline-flex items-center px-6 py-3 border-2 border-neon-magenta text-neon-magenta font-semibold rounded-lg hover:bg-neon-magenta hover:text-black transition-all duration-300 transform hover:scale-105">
                  <Eye className="w-5 h-5 mr-2" />
                  Preview Mode
                </button>
              </div>
            </div>

            {/* Tech specs */}
            <div className="mt-10 pt-8 border-t border-gray-700/50">
              <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">Powered By</p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-3 py-1 bg-gray-800/50 text-neon-cyan text-sm rounded-lg border border-gray-700/50">
                  Three.js
                </span>
                <span className="px-3 py-1 bg-gray-800/50 text-neon-magenta text-sm rounded-lg border border-gray-700/50">
                  WebGL
                </span>
                <span className="px-3 py-1 bg-gray-800/50 text-neon-lime text-sm rounded-lg border border-gray-700/50">
                  Interactive 3D
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Warning notice */}
        <div className="mt-8 p-4 bg-neon-lime/10 border border-neon-lime/30 rounded-lg">
          <p className="text-sm text-neon-lime">
            <strong>SYSTEM NOTICE:</strong> CV Interaktif memerlukan browser modern dengan dukungan WebGL untuk performa optimal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TombolAksi;