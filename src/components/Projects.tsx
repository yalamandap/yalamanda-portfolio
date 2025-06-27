
import { ExternalLink, Github, Database, Shield, Brain, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Banking Management System',
      description: 'A comprehensive banking simulation system with secure authentication, transaction management, and user account handling.',
      tech: ['Java', 'MySQL', 'JWT', 'Swing'],
      features: ['Secure Authentication', 'Transaction History', 'Account Management', 'Admin Panel'],
      icon: Shield,
      gradient: 'from-blue-500 to-cyan-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Spam Email Detection',
      description: 'Machine learning-powered email classification system with Flask backend and intuitive user interface.',
      tech: ['Python', 'Flask', 'ML', 'HTML/CSS'],
      features: ['ML Classification', 'Real-time Analysis', 'REST API', 'Rich UI'],
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'CRUD Application',
      description: 'Lightweight and responsive CRUD operations application built with vanilla JavaScript and Firebase backend.',
      tech: ['JavaScript', 'Firebase', 'HTML/CSS', 'REST API'],
      features: ['Real-time Updates', 'Responsive Design', 'Cloud Storage', 'User Authentication'],
      icon: Database,
      gradient: 'from-green-500 to-teal-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Web Scraping Tool',
      description: 'Python-based automated data collection tool for extracting and processing web content efficiently.',
      tech: ['Python', 'BeautifulSoup', 'Requests', 'Pandas'],
      features: ['Automated Scraping', 'Data Processing', 'Export Options', 'Error Handling'],
      icon: Globe,
      gradient: 'from-orange-500 to-red-500',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development, AI integration, and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Project Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-gray-300 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-teal-400 mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg hover:bg-slate-600/50 hover:text-white transition-all duration-200 group/link"
                >
                  <Github className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className={`flex items-center px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-200 group/link`}
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/papana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
