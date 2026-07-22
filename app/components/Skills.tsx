'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: '<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '⚡' },
        { name: 'Golang', icon: '🔵' },
        { name: 'Laravel', icon: '🔴' },
        { name: 'REST APIs', icon: '🔗' },
        { name: 'GraphQL', icon: '◼️' }
      ],
      color: 'primary'
    },
    {
      title: 'Frontend Development',
      icon: '<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
      skills: [
        { name: 'React.js', icon: '⚛️' },
        { name: 'Vue.js', icon: '💚' },
        { name: 'Next.js', icon: '▲' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' }
      ],
      color: 'secondary'
    },
    {
      title: 'Mobile Development',
      icon: '<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>',
      skills: [
        { name: 'Flutter', icon: '📱' }
      ],
      color: 'primary'
    },
    {
      title: 'Databases & ORM',
      icon: '<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>',
      skills: [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'Prisma', icon: '💎' },
        { name: 'Hasura', icon: '⚡' }
      ],
      color: 'secondary'
    },
    {
      title: 'Cloud & DevOps',
      icon: '<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>',
      skills: [
        { name: 'Docker', icon: '🐳' },
        { name: 'Cloudinary', icon: '☁️' },
        { name: 'Vercel', icon: '▲' },
        { name: 'Netlify', icon: '🔷' },
        { name: 'Railway', icon: '🚂' }
      ],
      color: 'primary'
    },
    {
      title: 'API & Integration',
      icon: '<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
      skills: [
        { name: 'Postman', icon: '📮' },
        { name: 'Payment Integration (Chapa)', icon: '💳' },
        { name: 'RESTful APIs', icon: '🔌' }
      ],
      color: 'secondary'
    },
    {
      title: 'Design & Prototyping',
      icon: '<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>',
      skills: [
        { name: 'Figma', icon: '🎯' },
        { name: 'Canva', icon: '✨' }
      ],
      color: 'primary'
    },
    {
      title: 'Version Control',
      icon: '<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
      skills: [
        { name: 'Git', icon: '📦' },
        { name: 'GitHub', icon: '🐙' }
      ],
      color: 'secondary'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 animate-fade-in-up">
          Skills & Technologies
        </h2>
        <p className="text-center text-gray-500 mb-12 text-lg animate-fade-in-up animation-delay-200">Technologies I work with</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card p-6 hover:scale-105 transition-all border border-gray-100 group animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div 
                className="mb-4 inline-block p-3 rounded-lg bg-gray-50 group-hover:bg-primary/10 transition-colors"
                style={{ color: category.color === 'primary' ? '#2563EB' : '#10B981' }}
                dangerouslySetInnerHTML={{ __html: category.icon }}
              ></div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-gray-50 text-xs border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-gray-700 flex items-center gap-1.5"
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
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