import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Automation',
      skills: [
        { name: 'LangChain', level: 90 },
        { name: 'LangGraph', level: 85 },
        { name: 'n8n', level: 95 },
        { name: 'OpenAI APIs', level: 88 },
      ],
    },
    {
      title: 'MERN Stack',
      skills: [
        { name: 'MongoDB', level: 92 },
        { name: 'Express.js', level: 90 },
        { name: 'React.js', level: 95 },
        { name: 'Node.js', level: 93 },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript/ES6+', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Redux', level: 85 },
        { name: 'Next.js', level: 82 },
      ],
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'REST APIs', level: 93 },
        { name: 'Python', level: 85 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'SEO', level: 88 },
      ],
    },
  ];

  const tools = [
    { name: 'Asterisk', icon: '📞' },
    { name: 'FreePBX', icon: '☎️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Postman', icon: '📮' },
    { name: 'VS Code', icon: '💻' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-xl hover:glow-box transition-all duration-300 transform hover:scale-110"
              >
                <div className="text-4xl mb-2">{tool.icon}</div>
                <span className="text-sm text-gray-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
