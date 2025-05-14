import { ArrowDownCircle } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0" />
      
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400">
              Bonjour, je suis
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              KPADJOUDA Enock Vivien A.
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 h-12">
              <TypeAnimation
                sequence={[
                  'Développeur Full-Stack Junior',
                  2000,
                  'Administrateur de Base de données',
                  2000
                 
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg">
            Jeune développeur web et administrateur de bases de données,
            intéressée par la création de solutions efficaces et performantes. En
            formation dans l’architecture logicielle, je maîtrise les technologies
            modernes du développement web ainsi que l’optimisation et la gestion
            des systèmes de bases de données. 
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 font-medium"
              >
                Me contacter
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 rounded-full transition-colors duration-300 font-medium"
              >
                Voir mes projets
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="./dist/assets/IMG_20230605_163514_350.jpg" 
                alt="Enock Djoudas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to about section"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowDownCircle size={36} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;