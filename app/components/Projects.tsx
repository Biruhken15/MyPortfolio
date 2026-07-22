'use client';

export default function Projects() {
  const projects = [
    {
      title: '2ndHand Web App',
      description: 'E-Commerce Platform',
      features: [
        'Product listing & approval system',
        'Favorites & sharing functionality',
        'Buyer-seller contact system'
      ],
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      icon: '<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
      color: 'primary'
    },
    {
      title: 'Connectify Web App',
      description: 'Social Community Platform',
      features: [
        'User profiles and posts',
        'Engagement features (Likes & Comments)',
        'Community interaction tools'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL'],
      icon: '<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
      color: 'secondary'
    },
    {
      title: 'Hohte Mobile App',
      description: 'Hymn Practice Application',
      features: [
        'Hymn listing and practice features',
        'Audio recording and comparison',
        'Flutter app with Laravel API backend'
      ],
      tech: ['Flutter', 'Laravel', 'REST API'],
      icon: '<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>',
      color: 'accent'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 animate-fade-in-up">
          Featured Projects
        </h2>
        <p className="text-center text-gray-500 mb-12 text-lg animate-fade-in-up animation-delay-200">Some of my recent work</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card p-6 hover:scale-105 transition-all border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 0.15}s` }}
            >
              <div 
                className="mb-4 inline-block p-3 rounded-xl bg-gray-50"
                style={{ color: project.color === 'primary' ? '#2563EB' : project.color === 'secondary' ? '#10B981' : '#F59E0B' }}
                dangerouslySetInnerHTML={{ __html: project.icon }}
              ></div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{project.description}</p>
              
              <div className="space-y-2 mb-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-gray-50 text-xs border border-gray-200 text-gray-700"
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
  );
}