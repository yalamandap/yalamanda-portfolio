
import { Code, Palette, Brain, TestTube } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Full Stack Development',
      description: 'End-to-end web application development using modern technologies like React, Node.js, and various databases.',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Frontend Development', 'Backend APIs', 'Database Design', 'Deployment']
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces with a focus on user experience and modern design principles.',
      icon: Palette,
      gradient: 'from-purple-500 to-pink-500',
      features: ['User Interface Design', 'Responsive Layouts', 'Prototyping', 'User Research']
    },
    {
      title: 'AI Integration',
      description: 'Implementing machine learning solutions and AI features to enhance application functionality and user experience.',
      icon: Brain,
      gradient: 'from-green-500 to-teal-500',
      features: ['ML Model Integration', 'Data Analysis', 'Predictive Systems', 'Automation']
    },
    {
      title: 'Software Testing',
      description: 'Comprehensive testing strategies to ensure software quality, reliability, and optimal performance across platforms.',
      icon: TestTube,
      gradient: 'from-orange-500 to-red-500',
      features: ['Unit Testing', 'Integration Testing', 'Performance Testing', 'Quality Assurance']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive software development services to bring your ideas to life with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Service Header */}
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-300">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's collaborate to create innovative solutions that meet your business needs and exceed expectations.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
