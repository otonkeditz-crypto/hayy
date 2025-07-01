import React from 'react';
import { User, MapPin, Calendar, Phone, Code2, Shield, Zap } from 'lucide-react';

const TentangSaya: React.FC = () => {
  const personalData = [
    { icon: User, label: 'Nama', value: 'Bayu Dimas' },
    { icon: MapPin, label: 'Lokasi', value: 'Indonesia' },
    { icon: Calendar, label: 'Status', value: 'Mahasiswa Aktif' },
    { icon: Phone, label: 'Availability', value: 'Ready for Projects' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Code2 className="w-8 h-8 text-neon-cyan mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold color-shift">
              DATA_PROFILE
            </h2>
            <Code2 className="w-8 h-8 text-neon-magenta ml-4" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-lime mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass rounded-2xl p-8 floating">
            <h3 className="text-2xl font-bold text-neon-cyan mb-6 border-b border-neon-cyan/30 pb-3">
              SYSTEM_INFO
            </h3>
            <div className="space-y-6">
              {personalData.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-lg bg-gray-800/50 border border-neon-cyan/20 group-hover:border-neon-cyan/60 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium color-shift">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional system indicators */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-neon-lime" />
                  <span className="text-sm text-gray-400">Security Level</span>
                </div>
                <span className="text-neon-lime font-mono text-sm">AUTHENTICATED</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-neon-magenta" />
                  <span className="text-sm text-gray-400">System Status</span>
                </div>
                <span className="text-neon-magenta font-mono text-sm">ONLINE</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-neon-magenta mb-6 border-b border-neon-magenta/30 pb-3">
              MISSION_STATEMENT
            </h3>
            <div className="space-y-6">
              <p className="text-cyber-gray leading-relaxed">
                Sebagai seorang <span className="color-shift font-semibold">Full-Stack Developer</span> yang 
                berdedikasi, saya berkomitmen untuk menciptakan solusi teknologi yang inovatif dan aman. 
                Dengan keahlian dalam pengembangan web dan keamanan siber, saya siap menghadapi tantangan 
                digital masa depan.
              </p>
              <p className="text-cyber-gray leading-relaxed">
                Passion saya terletak pada <span className="color-shift font-semibold">cybersecurity</span> dan 
                pengembangan aplikasi yang tidak hanya fungsional, tetapi juga aman dari berbagai ancaman digital. 
                Setiap baris kode yang saya tulis adalah langkah menuju masa depan yang lebih aman dan terhubung.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-neon-magenta/20 to-neon-lime/20 border border-neon-magenta/30 rounded-lg">
                  <span className="text-neon-magenta font-semibold">STATUS:</span>
                  <span className="text-neon-lime ml-2 font-mono">READY_FOR_MISSION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangSaya;