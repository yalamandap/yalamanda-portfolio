
import { GraduationCap, Calendar, Award } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Narasaraopeta Engineering College',
      period: '2021 - 2025',
      cgpa: '8.75 CGPA',
      status: 'Final Year'
    },
    {
      degree: 'Intermediate',
      institution: 'GJC Martur',
      period: '2019 - 2021',
      cgpa: '84.9%',
      status: 'Completed'
    },
    {
      degree: 'SSC',
      institution: 'ZP High School',
      period: '2018 - 2019',
      cgpa: '93%',
      status: 'Completed'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm Papana Yalamanda Rao, a passionate final-year B.Tech IT student at 
                Narasaraopeta Engineering College with a CGPA of 8.75. My journey in 
                technology has been driven by curiosity and a desire to solve real-world 
                problems through innovative solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I aspire to become a Software Development Engineer, specializing in 
                Full Stack Development and AI integration. My strong problem-solving 
                skills and project contributions reflect my commitment to excellence 
                and continuous learning.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm actively seeking opportunities to learn, apply, and innovate in 
                the field of software development, bringing fresh perspectives and 
                technical expertise to challenging projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-xl p-6 text-center border border-blue-500/20">
                <Award className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-1">CGPA</h4>
                <p className="text-blue-400 text-xl font-bold">8.75</p>
              </div>
              <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-xl p-6 text-center border border-teal-500/20">
                <GraduationCap className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-1">Final Year</h4>
                <p className="text-teal-400 text-xl font-bold">2025</p>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center text-blue-400 mb-8">Educational Journey</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-teal-500"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                        <span className="text-sm text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full">
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-2">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                        <div className="flex items-center text-gray-400 mb-1 sm:mb-0">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.period}
                        </div>
                        <div className="text-teal-400 font-semibold">
                          {edu.cgpa}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
