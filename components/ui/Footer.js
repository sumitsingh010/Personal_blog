import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 shadow-lg border-t text-white dark:bg-gray-900 py-4">
           
                <div className="container mx-auto flex items-center justify-around px-5">
                    <div className="text-center mb-4">
                        <h2 className="text-lg font-semibold">Follow Me</h2>
                    </div>
                    <div className="text-center text-sm text-gray-400">
                        © {new Date().getFullYear()} Sumit Singh . All rights reserved.
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="text-gray-400 hover:text-blue-600 transition-colors duration-300" size={18} />
                        </a>
                        <a href="https://x.com/Sumit SinghTemkar1" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-gray-400 hover:text-blue-400 transition-colors duration-300" size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/sumit-singh-sengar-5ba664255/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="text-gray-400 hover:text-blue-700 transition-colors duration-300" size={18} />
                        </a>
                        <a href="https://instagram.com/sumitsingh_010/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-gray-400 hover:text-pink-600 transition-colors duration-300" size={18} />
                        </a>
                        <a href="https://github.com/sumitsingh010" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-gray-400 hover:text-gray-300 transition-colors duration-300" size={18} />
                        </a>
                    </div>

                </div>
         
        </footer>
    );
};

export default Footer;
