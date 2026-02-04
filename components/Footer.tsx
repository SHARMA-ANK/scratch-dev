import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">awsmd.com</h3>
          <p className="text-gray-400">Digital Experiences that Inspire</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Socials</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Work
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-8 text-center">
        <p>&copy; {new Date().getFullYear()} awsmd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
