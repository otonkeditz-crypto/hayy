import React from 'react';
import { Briefcase, Shield, Code, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Pengalaman: React.FC = () => {
  const experiences = [
    {
      title: 'Cyber Security Class Participant',
      company: 'Indobelati Asia',
      companyUrl: 'https://indobelati.asia',
      period: '2023 - Present',
      location: 'Indonesia',
      type: 'Training Program',
      description: 'Mengikuti program pelatihan intensif dalam bidang keamanan siber, mempelajari teknik-teknik penetration testing, network security, dan ethical hacking.',
      skills: ['Network Security', 'Penetration Testing', 'Vulnerability Assessment', 'Security Analysis'],
      icon: Shield,
      color: 'neon-cyan',
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'Personal Projects',
      period: '2022 - Present',
      location: 'Remote',
      type: 'Self-Directed Learning',
      description: 'Mengembangkan berbagai aplikasi web menggunakan teknologi modern, fokus pada keamanan dan performa optimal.',
      skills: ['React', 'Node.js', 'MySQL', 'PHP', 'JavaScript'],
      icon: Code,
      color: 'neon-magenta',
    },
  ];

  const achievements = [
    'Menguasai fundamental cybersecurity',
    'Membangun aplikasi web full-stack',
    'Mengimplementasikan best practices keamanan',
    'Aktif dalam komunitas developer',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Briefcase className="w-8 h-8 text-neon-cyan mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold color-shift">
              FIELD_EXPERIENCE
            </h2>
            <Award className="w-8 h-8 text-neon-magenta ml-4" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-lime mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-neon-cyan to-neon-magenta hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full glass border-2 border-neon-cyan relative z-10">
                  <exp.icon className={`w-6 h-6 text-${exp.color}`} />
                </div>
                
                <div className="flex-1 glass rounded-2xl p-8 group hover:shadow-neon-cyan transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white color-shift mb-2">
                        {exp.title}
                      </h3>
                      {exp.companyUrl ? (
                        <a 
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neon-cyan font-semibold text-lg mb-2 hover:text-neon-lime transition-colors duration-300 inline-flex items-center group/link"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4 ml-2 group-hover/link:rotate-12 transition-transform duration-300" />
                        </a>
                      ) : (
                        <p className="text-neon-cyan font-semibold text-lg mb-2">{exp.company}</p>
                      )}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border bg-${exp.color}/20 text-${exp.color} border-${exp.color}/30`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-cyber-gray leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-800/50 text-neon-cyan text-sm rounded-lg border border-gray-700/50 hover:border-neon-cyan/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="glass rounded-2xl p-8">
          <div className="text-center mb-8">
            <Award className="w-12 h-12 text-neon-lime mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white color-shift">ACHIEVEMENTS_LOG</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-neon-lime/20 hover:border-neon-lime/50 transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-neon-lime/20 border border-neon-lime/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-neon-lime font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-cyber-gray color-shift">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pengalaman;