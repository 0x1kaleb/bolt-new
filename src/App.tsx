import React, { useState, useEffect } from 'react';
import { Github, Twitter, Youtube, Instagram } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScroll = () => {
    const sections = ['hero', 'about', 'projects', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-black text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold cursor-pointer hover:text-gray-300 transition-colors"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            KH
          </h1>
          <div className="flex gap-6">
            {/* Navigation buttons removed */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen relative">
        <div className="relative w-full h-full">
          <iframe 
            src='https://my.spline.design/digitalpass-5af1f99ed51fa62e991cd3e812e38a7e/' 
            className="w-full h-full absolute inset-0"
            style={{ border: 'none' }}
          />
          <div className="absolute bottom-0 right-0 w-[140px] h-[50px] bg-black z-10" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl transform translate-y-0 opacity-100 transition-all duration-1000 ease-out">
              <h2 className="text-6xl font-bold mb-4">
                Kaleb Harris
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Exploring the intersection of technology, creativity, and innovation.
                Join me on this digital journey.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                >
                  Get in Touch
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="border border-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto transform transition-all duration-700 hover:scale-[1.02]">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm Kaleb Harris, a tech enthusiast and content creator passionate about exploring and sharing the latest in technology. 
              With a deep understanding of software development and emerging tech trends, I create content that bridges the gap between 
              complex technical concepts and practical applications.
            </p>
            <p className="text-lg text-gray-300">
              Through my content, I aim to inspire and educate the next generation of developers and tech enthusiasts. 
              Join me as we explore the cutting edge of technology together.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Project 1",
                description: "Coming soon...",
                tech: ["React", "Node.js", "TypeScript"]
              },
              {
                title: "Project 2",
                description: "Coming soon...",
                tech: ["Web3", "Solidity", "Next.js"]
              },
              {
                title: "Project 3",
                description: "Coming soon...",
                tech: ["Python", "Machine Learning", "Data Science"]
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:bg-white/5"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-sm px-3 py-1 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Contact</h2>
            <p className="text-lg text-gray-300 mb-8">
              Want to collaborate or just say hi? Feel free to reach out through any of my social media channels 
              or send me a message here.
            </p>
            <form className="space-y-6">
              <div className="transform transition-all duration-500 hover:scale-[1.02]">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div className="transform transition-all duration-500 hover:scale-[1.02]">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 transition-all duration-300"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <footer className="py-12 relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-8">
            {[
              { icon: Twitter, href: "https://x.com/0x1kaleb" },
              { icon: Youtube, href: "https://www.youtube.com/@0x1Kaleb" },
              { icon: Github, href: "https://github.com/0x1kaleb" },
              { icon: Instagram, href: "https://www.instagram.com/0x1kaleb/" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;