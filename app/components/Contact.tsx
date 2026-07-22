'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 animate-fade-in-up">
          Get In Touch
        </h2>
        <p className="text-center text-gray-500 mb-12 text-lg animate-fade-in-up animation-delay-200">Let's connect and build something amazing</p>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12 animate-fade-in-up animation-delay-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 animate-fade-in-up animation-delay-400">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:biruhken21@gmail.com" className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all group animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-primary/10 transition-all">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold text-primary">biruhken21@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:0946038646" className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-secondary/10 transition-all">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-semibold text-secondary">+251 94 603 8646</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <div className="p-3 rounded-lg bg-gray-50">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold text-gray-900">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6 animate-fade-in-up animation-delay-500">Social Profiles</h3>
                <div className="space-y-4">
                  <a href="https://github.com/Biruhken15" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-primary/10 transition-all">
                      <svg className="w-6 h-6 text-gray-600 group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">GitHub</p>
                      <p className="font-semibold text-gray-700 group-hover:text-primary transition-colors">github.com/Biruhken15</p>
                    </div>
                  </a>

                  <a href="https://t.me/Biruhken" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all group animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-secondary/10 transition-all">
                      <svg className="w-6 h-6 text-gray-600 group-hover:text-secondary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Telegram</p>
                      <p className="font-semibold text-gray-700 group-hover:text-secondary transition-colors">@Biruhken</p>
                    </div>
                  </a>

                  <a href="https://linkedin.com/in/biruhken" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all group animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-primary/10 transition-all">
                      <svg className="w-6 h-6 text-gray-600 group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <p className="font-semibold text-gray-700 group-hover:text-primary transition-colors">linkedin.com/in/biruhken</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}