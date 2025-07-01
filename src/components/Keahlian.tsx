import React from 'react';
import { Code, Database, Shield, Server, Globe, Cpu, Braces, FileCode, Terminal, Layers } from 'lucide-react';

const Keahlian: React.FC = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: Globe,
      color: 'neon-cyan',
      skills: [
        { name: 'JavaScript', icon: Braces },
        { name: 'React', icon: Layers },
        { name: 'HTML5', icon: FileCode },
        { name: 'CSS3', icon: FileCode },
        { name: 'Tailwind CSS', icon: Layers }
      ],
      level: 85,
    },
    {
      category: 'Backend Development',
      icon: Server,
      color: 'neon-magenta',
      skills: [
        { name: 'Node.js', icon: Terminal },
        { name: 'PHP', icon: Code },
        { name: 'API Development', icon: Server },
        { name: 'RESTful Services', icon: Globe }
      ],
      level: 78,
    },
    {
      category: 'Database Management',
      icon: Database,
      color: 'neon-lime',
      skills: [
        { name: 'MySQL', icon: Database },
        { name: 'Database Design', icon: Layers },
        { name: 'Query Optimization', icon: Terminal }
      ],
      level: 75,
    },
    {
      category: 'Cyber Security',
      icon: Shield,
      color: 'neon-cyan',
      skills: [
        { name: 'Network Security', icon: Shield },
        { name: 'Penetration Testing', icon: Terminal },
        { name: 'Security Analysis', icon: Code }
      ],
      level: 70,
    },
    {
      category: 'Programming Languages',
      icon: Code,
      color: 'neon-magenta',
      skills: [
        { name: 'JavaScript', icon: Braces },
        { name: 'PHP', icon: Code },
        { name: 'Python', icon: Terminal },
        { name: 'SQL', icon: Database }
      ],
      level: 82,
    },
    {
      category: 'System Administration',
      icon: Cpu,
      color: 'neon-lime',
      skills: [
        { name: 'Linux', icon: Terminal },
        { name: 'Server Configuration', icon: Server },
        { name: 'System Monitoring', icon: Cpu }
      ],
      level: 68,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Code className="w-8 h-8 text-neon-magenta mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold color-shift">
              SKILL_MATRIX
            </h2>
            <Shield className="w-8 h-8 text-neon-lime ml-4" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-magenta via-neon-lime to-neon-cyan mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="glass rounded-2xl p-6 group hover:shadow-neon-cyan transition-all duration-300 floating" style={{animationDelay: `${index * 0.5}s`}}>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-${skillCategory.color}/20 border border-${skillCategory.color}/30 mr-4`}>
                  <skillCategory.icon className={`w-6 h-6 text-${skillCategory.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white color-shift">
                  {skillCategory.category}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between py-2 px-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-neon-cyan/30 transition-colors duration-300 group/skill">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-4 h-4 text-neon-cyan group-hover/skill:text-neon-lime transition-colors duration-300" />
                      <span className="text-cyber-gray text-sm font-medium">{skill.name}</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* Skill level indicator */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Proficiency Level</span>
                  <span className={`text-${skillCategory.color} font-mono text-sm`}>{skillCategory.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r from-${skillCategory.color} to-${skillCategory.color}/50 transition-all duration-1000 ease-out`}
                    style={{ width: `${skillCategory.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification section */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 inline-block">
            <Shield className="w-12 h-12 text-neon-lime mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2 color-shift">Security Clearance</h3>
            <p className="text-cyber-gray">Certified in ethical hacking and cybersecurity principles</p>
            <div className="mt-4 inline-flex items-center px-4 py-2 bg-neon-lime/20 border border-neon-lime/30 rounded-lg">
              <span className="text-neon-lime font-semibold">STATUS: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keahlian;