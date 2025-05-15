import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Site web Voyage",
    description: "Création d’un site web de visite pour les voyages",
    image: "/assets/images/image1.png",
    tags: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/Enock-kdjouda/Site-web-de-voyage",
    liveUrl: "https://site-web-de-voyage.vercel.app/",
    category: "web"
  },
  {
    id: 2,
    title: " Dépistage de cancer de sein",
    description: "En gros , c'est un site qui sensibilise les femmes atteint du cancer de sein à se faire dépister",
    image: "/assets/images/image2.png",
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/Enock-kdjouda/D-pistage-cancer",
    category: "web"
  },
  {
    id: 3,
    title: "Gestion LMD",
    description: "Application de gestion des notes des étudiants avec leurs ECs et UEs constitutifs.",
    image: "/assets/images/image3.png",
    tags: ["Laravel", "Tailwind.CSS", "Tests unitaires"],
    githubUrl: "https://github.com/Enock-kdjouda/lmd-grades",
    category: "backend"
  },
  {
    id: 4,
    title: "E-Business Management Tools",
    description: "Application de gestions de Projet au sein de E-Business Afrique.",
    image: "/assets/images/image4.png",
    tags: ["React", "Typescript", "Tailwind.CSS", "Vite"],
    githubUrl: "https://github.com/Enock-kdjouda/salut-friendly-universe",
    liveUrl: "https://e-businessmanagenementtools.netlify.app/",
    category: "web"
  },
  {
    id: 5,
    title: "Budget Pro",
    description: "Application web de gestion de budget au sein des entreprises.",
    image: "/assets/images/image5.png",
    tags: ["React", "Typescript", "Tailwind.CSS", "Vite"],
    githubUrl: "https://github.com/Enock-kdjouda/bonjour-coding-pal",
    liveUrl: "https://gestionsbudget.netlify.app/",
    category: "web"
  },
  {
    id: 6,
    title: "Task Manager",
    description: "Application de gestion de tâches pour les projets.",
    image: "/assets/images/image6.png",
    tags: ["React", "Typescript", "Tailwind.CSS", "Vite"],
    githubUrl: "https://github.com/Enock-kdjouda/projet-pilote-t",
    liveUrl: "https://tasksofmanagers.netlify.app/",
    category: "web"
  },
  {
    id: 7,
    title: "Quizofvue",
    description: "Un site de quiz pour les développeurs utilisant Vue JS.",
    image: "/assets/images/image8.png",
    tags: ["Vue JS"],
    githubUrl: "https://github.com/Enock-kdjouda/Tuto-Quiz.git",
    liveUrl: "https://quizofvue.netlify.app/",
    category: "web"
  },
  {
    id: 8,
    title: "TutoAgence",
    description: "Un site présentant une agence immobilière de vente de Maison.",
    image: "/assets/images/image9.png",
    tags: ["laravel", "Tailwind.CSS" , "Bootstrap"],
    githubUrl: "https://github.com/Enock-kdjouda/TutoAgence",
    category: "backend"
  },
  {
    id: 9,
    title: "Task Manager V2",
    description: "Application de gestion de tâches pour le pilotage des projets.",
    image: "/assets/images/WhatsApp Image 2025-05-16 à 00.47.44_2ff8559f.jpg",
    tags: ["laravel", "Tailwind.CSS" , "Bootstrap", "chart.js"],
    githubUrl: "https://github.com/Enock-kdjouda/taskmanager.git",
    category: "backend"
  },
  
];

const categories = [
  { id: "all", label: "Tous" },
  { id: "web", label: "Web" },
  { id: "backend", label: "Backend" }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);

  const filterProjects = (category: string) => {
    setActiveCategory(category);
    if (category === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus récents et les plus significatifs, 
            mettant en valeur mes compétences et mon expertise.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => filterProjects(category.id)}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;