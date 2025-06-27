
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'UI/UX Design', level: 75 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Core Java', level: 90 },
        { name: 'Advanced Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Flask/Django', level: 75 }
      ]
    },
    {
      title: 'Database & Tools',
      icon: Wrench,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'JDBC', level: 75 }
      ]
    },
    {
      title: 'Technologies',
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'JWT Authentication', level: 80 },
        { name: 'Machine Learning', level: 75 },
        { name: 'DBMS', level: 85 },
        { name: 'Software Testing', level: 70 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Languages', value: '5+', icon: Code },
            { label: 'Frameworks', value: '8+', icon: Wrench },
            { label: 'Databases', value: '4+', icon: Database },
            { label: 'Projects', value: '10+', icon: Brain }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-blue-500/20"
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
