import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white rounded-t-xl shadow-lg w-full p-6 mt-8">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-lg font-semibold text-blue-800">Contact Me:</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/mahipal-dhayal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-800"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahipaldhayal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-800"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:mahipaldhayal2002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-800"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
