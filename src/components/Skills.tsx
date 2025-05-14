const skillCategories = [
  {
    title: "Développement Front-end",
    skills: [
      { name: "JavaScript", level: 60 },
      { name: "React", level: 80 },
      { name: "Angular", level: 60 },
      { name: "Vue JS", level: 70 },
      { name: "Nuxt JS", level: 60 },
    ],
  },
  {
    title: "Développement Back-end",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "Express", level: 60 },
      { name: "SQL", level: 90 },
      { name: "Laravel", level: 90 },
      { name: "API REST", level: 80 },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 60 },
      { name: "Postman", level: 70 },
      { name: "Thunder Client", level: 90 },
      { name: "Linux", level: 60 },
      { name: "Git", level: 90 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Grâce à mes années d'expérience et mon apprentissage continu, j'ai développé une 
            expertise dans différents domaines techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    name={skill.name} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Autres compétences
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Github", "VS Code","Bootstrap","Oracle","UML", "SQLite","Redux", "Pack Office","Composer", "Python", "XML / XSLT", "XAMPP",
              "Figma", "Render", "Arduino", "Base de donnée", "Netlify", "Vercel" , "Tests unitaires et fonctionnels"
            ].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;