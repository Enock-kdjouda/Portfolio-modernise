const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">Portfolio</h2>
            <p className="text-gray-400 mt-2">
              Développeur Full-Stack Junior
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © {currentYear} Enock Djoudas. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Conçu et développé avec passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;