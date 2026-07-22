'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Junior Software Engineer',
      company: 'BESYS Technologies',
      location: 'Addis Ababa, Ethiopia',
      duration: 'Current',
      responsibilities: [
        'Developing and maintaining software solutions',
        'Collaborating with cross-functional teams',
        'Working on cloud infrastructure and deployment',
        'Implementing payment integration solutions (Chapa)',
        'Contributing to full-stack development projects'
      ],
      color: 'primary',
      isCurrent: true
    },
    {
      title: 'Junior Software Developer Intern',
      company: 'Sholla Technology - Cyber Security Company',
      location: 'Addis Ababa, Megenagna',
      duration: 'Oct 2024 - Jan 2024',
      responsibilities: [
        'Gained hands-on experience in cybersecurity-focused software development',
        'Contributed to security-focused application development'
      ],
      color: 'secondary',
      isCurrent: false
    },
    {
      title: 'Startup & Innovation Participant',
      company: 'DDU Business and Technology Incubation Center',
      location: 'Dire Dawa University, Ethiopia',
      duration: '2023-2024',
      responsibilities: [
        'Participated in multiple startup pitch competitions',
        'Developed business models and entrepreneurship skills',
        'Gained practical tech and development skills training',
        'Engaged in innovation and startup ecosystem activities',
        'Presented startup ideas to investors and mentors'
      ],
      color: 'accent',
      isCurrent: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 animate-fade-in-up">
          Professional Experience
        </h2>
        <p className="text-center text-gray-500 mb-12 text-lg animate-fade-in-up animation-delay-200">My journey in software development</p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card p-8 md:p-10 border-l-4 animate-fade-in-up"
              style={{ 
                borderLeftColor: exp.color === 'primary' ? '#2563EB' : exp.color === 'secondary' ? '#10B981' : '#F59E0B',
                animationDelay: `${(index + 3) * 0.15}s`
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gray-50">
                      <svg className="w-6 h-6" style={{ color: exp.color === 'primary' ? '#2563EB' : exp.color === 'secondary' ? '#10B981' : '#F59E0B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 18h.01M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-gray-600">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {exp.location}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  {exp.isCurrent ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                      </span>
                      Current
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-semibold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.duration}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}