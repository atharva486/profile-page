import React from 'react';

function Skill() {
  const coreSkills = [
    { name: 'React / Next.js', percentage: 80 },
    { name: 'JavaScript (ES6+) & TypeScript', percentage: 75 },
    { name: 'Node.js / Express.js', percentage: 70 },
    { name: 'MongoDB', percentage: 70 },
    { name: 'UI/UX Design', percentage: 80 },
    { name: 'Database Design', percentage: 60 },
  ];

  const techStack = [
    { category: 'Frontend', technologies: ['React', 'Next.js', 'TailwindCSS'] },
    { category: 'Backend', technologies: ['Node.js', 'Express.js'] },
    { category: 'Database', technologies: ['MongoDB'] },
    { category: 'Tools', technologies: ['Git', 'GitHub', 'VSCode', 'Postman'] },
    { category: 'Others', technologies: ['Figma(basicUI)', 'RESTAPIs'] },
  ];

  const currentLearning = [
    { title: 'OAuth 2.0 & secure authentication' },
    { title: 'Razorpay & Payment Gateway Integration' },
    { title: 'Production-ready full-stack apps (MERN)' },
    { title: 'Blockchain & Web3 fundamentals' },
    { title: 'Microservices architecture basics' },
    { title: 'AI integration in web projects (coming soon!)' },
  ];

  return (
    <>
      <div id="skill" className="w-full bg-zinc-950 py-20 text-white">
        <div className="text-center">
          <p className="font-semibold text-4xl">Skills & Expertise</p>
          <p className="text-zinc-400 text-lg mt-2">
            Here are some of the technologies and skills I work with to bring ideas to life.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mx-10 lg:mx-20 mt-10 gap-10">
          {/* Core Skills */}
          <div className="w-full lg:w-1/2 space-y-6">
            {coreSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-400 text-sm">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-white h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack + Learning */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Technologies */}
            <div>
              <p className="text-2xl mb-3 text-center">Technologies</p>
              <div className="flex flex-wrap justify-center gap-3 px-4">
                {techStack.map((stack, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-[48%] lg:w-fit p-2 rounded-2xl"
                  >
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-zinc-900 text-white rounded-2xl px-3 py-1 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div className="border border-zinc-700 rounded-3xl p-5">
              <p className="text-2xl mb-3">Current Focus:</p>
              <p className="text-zinc-400 mb-2 text-sm">
                Currently exploring and building projects while deepening my knowledge in:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {currentLearning.map((item, index) => (
                  <li key={index} className="text-white text-sm">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
