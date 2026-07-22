'use client';

import Image from 'next/image';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left side - Text content */}
          <div className="text-center md:text-left order-2 md:order-1 space-y-6">
            <div className="inline-block mb-6 animate-slide-in-stagger">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-all duration-300 cursor-default">
                Junior Software Engineer
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 animate-fade-in-up hover:scale-105 transition-transform duration-300">
              Biruhken
              <br />
              <span className="gradient-text">Ayana</span>
            </h1>

            <div className="text-xl md:text-2xl font-semibold mb-8 text-gray-700 animate-fade-in-up animation-delay-200">
              <span className="text-primary">Software Engineer</span>
              <span className="text-gray-400 mx-2">||</span>
              <span className="text-secondary">Fullstack Developer</span>
            </div>

            <p className="text-xl text-gray-600 mb-8 font-medium animate-fade-in-up animation-delay-200 hover:text-primary transition-colors duration-300">
              @ BESYS Technologies
            </p>

            <div className="space-y-4 mb-8 text-left">
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up animation-delay-300 hover:translate-x-2 transition-transform duration-300">
                Energetic and motivated Junior Software Engineer with a fresh perspective and hands-on industry experience. Currently contributing to innovative solutions at <span className="text-primary font-semibold">BESYS Technologies</span>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up animation-delay-400 hover:translate-x-2 transition-transform duration-300">
                Graduated with <span className="text-secondary font-semibold">Honors</span> from Dire Dawa University with a Bachelor's degree in Software Engineering. My academic excellence combined with practical experience has equipped me with a strong foundation in software development principles.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up animation-delay-500 hover:translate-x-2 transition-transform duration-300">
                I'm passionate about <span className="text-primary font-semibold">cloud computing</span> and <span className="text-secondary font-semibold">payment integration systems</span>, with proven experience implementing Chapa payment solutions. My technical expertise spans the JavaScript ecosystem, including the MERN stack, along with Go, Flutter, and modern frameworks like Vue.js and Next.js.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up animation-delay-600 hover:translate-x-2 transition-transform duration-300">
                Beyond coding, I've actively participated in startup pitch competitions and business model development through the DDU Business and Technology Incubation Center, where I honed my skills in innovation, entrepreneurship, and practical tech development.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="animate-count-up" style={{animationDelay: '0.7s'}}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-white border border-gray-100 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-primary animate-float" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-gray-900 mb-0.5">18</div>
                      <div className="text-xs text-gray-600 font-medium">Git Repository</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-count-up" style={{animationDelay: '0.9s'}}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-lg blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-white border border-gray-100 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-secondary animate-float" style={{animationDelay: '0.5s'}} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-gray-900 mb-0.5">7</div>
                      <div className="text-xs text-gray-600 font-medium">Deployed</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-count-up" style={{animationDelay: '1.1s'}}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-white border border-gray-100 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-accent animate-float" style={{animationDelay: '1s'}} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-gray-900 mb-0.5">2</div>
                      <div className="text-xs text-gray-600 font-medium">Domain Integrated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8 animate-fade-in-up animation-delay-900">
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <span className="text-sm font-medium">Available for opportunities</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 mb-6 animate-fade-in-up animation-delay-1000">
              <button
                onClick={() => scrollToSection('experience')}
                className="btn-primary"
              >
                View Experience
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 animate-fade-in-up animation-delay-1000">
              <a
                href="https://www.linkedin.com/in/biruhken-ayana-210045298"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white text-gray-600 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://t.me/@Biruhye24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-secondary hover:text-white text-gray-600 transition-all duration-300 hover:scale-110"
                aria-label="Telegram Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl group">
              {/* Main image - Full height rectangle */}
              <div className="relative aspect-[3/4] w-full h-[550px] md:h-[700px] lg:h-[850px] xl:h-[1000px] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-1">
                <Image
                  src="/myimages/primary.png"
                  alt="Biruhken Ayana"
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-contain transition-all duration-500"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('experience')}
          className="text-gray-400 hover:text-primary transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}