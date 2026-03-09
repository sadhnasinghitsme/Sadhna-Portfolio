import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const highlights = [
    { icon: '🤖', title: 'AI Integration', desc: 'n8n automation & AI workflows' },
    { icon: '⚡', title: 'MERN Stack', desc: 'MongoDB, Express, React, Node.js' },
    { icon: '🎯', title: 'SEO Expert', desc: 'Optimization & Performance' },
    { icon: '📞', title: 'VoIP Systems', desc: 'Asterisk, FreePBX management' },
  ];

  return (
    <section id="about" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`glass rounded-2xl p-8 md:p-12 mb-12 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a <span className="text-primary font-semibold">Full Stack MERN Developer</span> with a passion for 
              integrating <span className="text-secondary font-semibold">Artificial Intelligence</span> into modern web applications. 
              My expertise spans from building scalable backend systems to creating intelligent automation workflows.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in developing AI-powered solutions, creating intelligent automation workflows with n8n, 
              and building robust full-stack applications that solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`glass rounded-xl p-6 hover:glow-box transition-all duration-300 transform hover:scale-105 ${isVisible ? 'scale-in' : 'opacity-0'}`}
                style={{animationDelay: `${0.4 + index * 0.1}s`}}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
