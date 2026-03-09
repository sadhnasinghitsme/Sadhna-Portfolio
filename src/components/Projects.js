import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const projects = [
    {
      title: 'AI Automation Email Replier',
      description: 'Intelligent email automation system that reads incoming emails and generates contextual responses using AI. Streamlines communication with smart reply suggestions.',
      tech: ['n8n', 'OpenAI', 'Gmail API', 'Node.js', 'Webhooks'],
      features: ['Auto email reading', 'AI-generated replies', 'Context awareness', 'Smart categorization'],
      gradient: 'from-violet-500 to-purple-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'ATS Resume Analyzer',
      description: 'AI-powered resume screening system that analyzes resumes against job descriptions with intelligent matching algorithms and keyword extraction.',
      tech: ['Python', 'React', 'Node.js', 'MongoDB', 'NLP'],
      features: ['AI-powered matching', 'Skill extraction', 'Score calculation', 'PDF parsing'],
      gradient: 'from-cyan-500 to-blue-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'AI Chat Agent',
      description: 'Intelligent automation workflow using n8n. Multi-channel chatbot with context awareness, natural language processing, and seamless integrations.',
      tech: ['n8n', 'OpenAI', 'Webhooks', 'REST APIs', 'MongoDB'],
      features: ['Multi-platform support', 'Context retention', 'Auto-responses', 'Analytics dashboard'],
      gradient: 'from-purple-500 to-pink-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: 'Full Stack MERN Application',
      description: 'Enterprise-grade web application with authentication, real-time features, and SEO optimization. Scalable architecture with best practices.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux'],
      features: ['JWT authentication', 'Real-time updates', 'SEO optimized', 'Responsive design'],
      gradient: 'from-green-500 to-teal-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-8 hover:glow-box transition-all duration-300 transform hover:scale-105 flex flex-col ${isVisible ? 'scale-in' : 'opacity-0'}`}
              style={{animationDelay: `${0.2 + index * 0.15}s`}}
            >
              <div className={`bg-gradient-to-r ${project.gradient} p-4 rounded-xl mb-6 inline-block`}>
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-primary">{project.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
