import React from 'react';
import { MapPin, Phone, Mail, Globe, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/footer-bg2.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-6 md:px-8 lg:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* College Info Section */}
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                  <img src="/logo.png" alt="College Logo" className="h-16 w-auto mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Dispur College</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                Empowering minds through technology. Access the world's largest collection of academic resources, research papers, and digital archives. Join millions of researchers, students, and educators in the pursuit of knowledge.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-6 relative">
                  Quick Links
                  <div className="absolute  left-0 w-28 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                </h4>
              </div>
              <ul className="space-y-4">
                {[
                  { name: "Ministry of Education", url: "https://www.education.gov.in/en" },
                  { name: "National Academic Depository", url: "https://nad.gov.in/" },
                  { name: "University Grant Commission", url: "https://www.ugc.gov.in/" },
                  { name: "Ministry Of Science and Technology", url: "https://dst.gov.in/" },
                  { name: "Anti Ragging Affidavit", url: "https://antiragging.in/" },
                  { name: "Swayam", url: "https://swayam.gov.in/" },
                  // { name: "Old Website", url: "#" }
                ].map((link, index) => (
                  <li key={index} className="group">
                    <a 
                      href={link.url}
                      className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-2"
                      target={link.url !== "#" ? "_blank" : "_self"}
                      rel={link.url !== "#" ? "noopener noreferrer" : ""}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-300"></div>
                      <span className="text-sm lg:text-base">{link.name}</span>
                      {link.url !== "#" && <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-6 relative">
                  Contact Us
                  <div className="absolute  left-0 w-28 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                </h4>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-500/30 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      Dispur College, Guwahati -781 006 , Assam, India.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-center group">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <a href="tel:+919435194607" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base">
                    0361 - 3513202
                  </a>
                </li>
                
                <li className="flex items-center group">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <a href="mailto:dispurcollege1978@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base break-all">
                    dispurcollege1978@gmail.com
                  </a>
                </li>
                
                <li className="flex items-center group">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Globe className="w-5 h-5 text-purple-400" />
                  </div>
                  <a href="https://dispurcollege.ac.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base">
                    https://dispurcollege.ac.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 md:px-8 lg:px-16 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-300 text-sm">
                  © 2025 All Rights Reserved - Dispur College, Assam
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-sm">Developed by</span>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://libkart.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 transition-all duration-300 hover:scale-105"
                  >
                    <img src="/lib.png" alt="Libkart Logo" className="h-6 w-auto" />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;