import React from 'react'

function Skill() {
  const coreSkills = [
    { name: "React / Next.js", percentage: 80 },
    { name: "JavaScript (ES6+) & TypeScript", percentage: 75 },
    { name: "Node.js / Express.js", percentage: 70 },
    { name: "MongoDB", percentage: 70 },
    { name: "UI/UX Design", percentage: 80 },
    { name: "Database Design", percentage: 60 }
  ];
  const techStack = [
    { category: "Frontend", technologies: ["React", "Next.js", "TailwindCSS"] },
    { category: "Backend", technologies: ["Node.js", "Express.js"] },
    { category: "Database", technologies: ["MongoDB"] },
    { category: "Tools", technologies: ["Git", "GitHub", "VSCode", "Postman"] },
    { category: "Others", technologies: ["Figma(basicUI)", "RESTAPIs"] }
  ];
  const currentLearning = [
    { title: "OAuth 2.0 & secure authentication" },
    { title: "Razorpay & Payment Gateway Integration" },
    { title: "Production-ready full-stack apps (MERN)" },
    { title: "Blockchain & Web3 fundamentals" },
    { title: "Microservices architecture basics" },
    { title: "AI integration in web projects (coming soon!)" }
  ];
  return (
    <>
    <div id='skill' className='w-full bg-zinc-950  py-20 text-white h-[120vh]'>
          <div className='w-full text-center flex flex-col gap-4'>
            <p className='font-semibold text-4xl '>Skills & Expertise</p>
            <p className='text-zinc-400 text-lg'>Here are some of the technologies and skills I work with to bring ideas to life.</p>
            <div className='flex  justify-between mx-20 my-10'>
              <div className="w-1/2 max-w-2xl space-y-6 my-10">
                {coreSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white font-medium">{skill.name}</span>
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
              <div className='flex flex-col w-1/2 '>
                <div className=' flex flex-col gap-5 h-fit w-full'>
                  <div className='text-2xl text-center w-full mx-auto'>Technologies</div>
                  <div className='flex flex-row flex-wrap w-full px-20 gap-3'>
                    {techStack.map((skill, index) => (
                      <div key={index} className='bg-transparent rounded-2xl py-2 w-full sm:w-[48%] md:w-[48%] lg:w-fit'>

                        <div className='flex flex-wrap gap-2'>
                          {skill.technologies.map((item, techIndex) => (
                            <div
                              key={techIndex}
                              className='bg-zinc-900 text-white rounded-2xl px-3 py-1 text-sm'
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
                <div className='w-full h-fit p-5 px-5 mx-5 my-5 border-[1px] rounded-4xl'>
                  <p className='text-2xl mb-4 text-left'>Current Focus:</p>
                  <p className='text-zinc-400 text-lg text-left text-semibold'>Currently exploring and building projects while deepening my knowledge in:</p>
                  <ul className='w-full list-disc space-y-1.5'>
                    {currentLearning.map((item, index) => {
                      return (
                        <li className='mx-10 text-left '>{item.title}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Skill
