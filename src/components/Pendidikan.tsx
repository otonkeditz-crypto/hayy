import React from 'react';
import { GraduationCap, School, Award, CaseSensitive as University } from 'lucide-react';

const Pendidikan: React.FC = () => {
  const educationData = [
    {
      level: 'Universitas',
      school: 'Universitas Muhammadiyah Purwokerto',
      period: '2024 - Sekarang',
      status: 'Active Learning',
      description: 'Melanjutkan pendidikan tinggi dengan fokus pada teknologi dan inovasi',
      icon: University,
    },
    {
      level: 'SMK',
      school: 'SMK Mitra Karya Mandiri',
      period: '2022 - 2024',
      status: 'Completed',
      description: 'Lulus dengan fokus pada teknologi informasi dan pengembangan perangkat lunak',
      icon: GraduationCap,
    },
    {
      level: 'SMP',
      school: 'SMPN 3 Losari',
      period: '2019 - 2022',
      status: 'Completed',
      description: 'Membangun fondasi akademik yang kuat',
      icon: School,
    },
    {
      level: 'SD',
      school: 'SDN 2 Prapag Kidul',
      period: '2013 - 2019',
      status: 'Completed',
      description: 'Tahap awal perjalanan pendidikan',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-8 h-8 text-neon-lime mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold color-shift">
              EDUCATION_LOG
            </h2>
            <GraduationCap className="w-8 h-8 text-neon-cyan ml-4" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-lime via-neon-cyan to-neon-magenta mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-neon-lime via-neon-cyan to-neon-magenta hidden md:block"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full glass border-2 border-neon-cyan relative z-10">
                  <edu.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                
                {/* Content card */}
                <div className="flex-1 glass rounded-2xl p-8 group hover:shadow-neon-cyan transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white color-shift group-hover:text-neon-cyan transition-colors duration-300">
                        {edu.school}
                      </h3>
                      <p className="text-neon-cyan font-mono text-sm uppercase tracking-wider">
                        {edu.level} • {edu.period}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
                        edu.status === 'Active Learning' 
                          ? 'bg-neon-lime/20 text-neon-lime border-neon-lime/30'
                          : 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-cyber-gray leading-relaxed">
                    {edu.description}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="mt-6">
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          edu.status === 'Active Learning' 
                            ? 'from-neon-lime to-neon-cyan w-2/3'
                            : 'from-neon-cyan to-neon-magenta w-full'
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pendidikan;