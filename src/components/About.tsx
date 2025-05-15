import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Mon parcours
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Jeune développeur web et administrateur de bases de données, je suis passionné 
              par la création d'applications web performantes et évolutives. Spécialisé dans les technologies 
               modernes, je maîtrise React, Laravel et les frameworks associés.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Grâce à mon expertise en Développement, je peux concevoir, développer et déployer des 
              applications complètes. Je m'intéresse particulièrement à l'optimisation des performances et 
              à l'architecture des applications.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col">
                <span className="text-gray-600 dark:text-gray-400">Nom</span>
                <span className="font-medium text-gray-900 dark:text-white">KPADJOUDA Enock Vivien A.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 dark:text-gray-400">Email</span>
                <span className="font-medium text-gray-900 dark:text-white">enockdjoudas@gmail.com</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 dark:text-gray-400">Disponibilité</span>
                <span className="font-medium text-gray-900 dark:text-white">Freelance / temps plein</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 dark:text-gray-400">Localisation</span>
                <span className="font-medium text-gray-900 dark:text-white">Cotonou, Littoral - Bénin</span>
              </div>
            </div>

            <a
              href="/assets/images/ENOCK VIVIEN A. KPADJOUDA .pdf"
              className="inline-block mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 font-medium"
            >
              Voir mon CV
            </a>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Expérience & Formation
            </h3>

            {/* Timeline */}
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              {/* Experience Item 1 */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 rounded-full bg-blue-600 p-2 -translate-x-1/2">
                  <Briefcase size={16} className="text-white" />
                </div>
                <div className="flex flex-col bg-white dark:bg-gray-900 rounded-lg p-5 shadow-sm">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">2022 - 2025</span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1"> Licence en Informatique Réseau et télécommunication</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Spécialité : Architecture Logiciel</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Université : ESGIS BENIN </p>
                </div>
              </div>
               {/* Certification Item */}
               <div className="relative pl-8">
                <div className="absolute left-0 top-1 rounded-full bg-blue-600 p-2 -translate-x-1/2">
                  <Award size={16} className="text-white" />
                </div>
                <div className="flex flex-col bg-white dark:bg-gray-900 rounded-lg p-5 shadow-sm">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Février 2025</span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">Certificat de Réussite</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Durant  cette période de l'année j'ai validé et obtenu les certifications en : </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Maîtrisez les fondamentaux d'Excel -  Utilisez ChatGPT pour améliorer votre productivité -  Apprenez les bases du langage Python - 
                    Devenez développeur agile -  Gérez du code avec Git et GitHub -  Apprenez à utiliser la ligne de commande dans un terminal - 
                    Créez votre site web avec HTML5 et CSS3
                  </p>
                </div>
              </div>
              {/* Education Item */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 rounded-full bg-blue-600 p-2 -translate-x-1/2">
                  <GraduationCap size={16} className="text-white" />
                </div>
                <div className="flex flex-col bg-white dark:bg-gray-900 rounded-lg p-5 shadow-sm">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Février 2025</span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">Stagiaire en Informatique , Réseau et téléocmmunications</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Entreprise : Pebco - Bethesda</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Auparavant , stagiaire à Pebco en IRT , une structure de Microfinance spécialisé dans la finance. 
                  </p>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 rounded-full bg-blue-600 p-2 -translate-x-1/2">
                  <GraduationCap size={16} className="text-white" />
                </div>
                <div className="flex flex-col bg-white dark:bg-gray-900 rounded-lg p-5 shadow-sm">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Mars - Juin 2025</span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">Stagiaire en développement d'applications</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Entreprise : E-Business Afrique au Bénin</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Auparavant , stagiaire à E-BA en développement d'applications web 
                  </p>
                </div>
              </div>
              {/* Experience Item 2 */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 rounded-full bg-blue-600 p-2 -translate-x-1/2">
                  <Code size={16} className="text-white" />
                </div>
                <div className="flex flex-col bg-white dark:bg-gray-900 rounded-lg p-5 shadow-sm">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">2021- 2022</span>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">Baccalauréat Scientifiques</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Série : D</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Etablissement : Notre Dame de Laurette / Agla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;