'use client';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'Dire Dawa University',
      location: 'Dire Dawa, Ethiopia',
      year: '2025',
      honors: true,
      icon: '<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>'
    }
  ];

  const certifications = [
    {
      title: 'Business & Technology Innovation Training',
      organization: 'Dire Dawa University',
      year: '2025',
      icon: '<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>'
    },
    {
      title: 'Startup Pitch & Business Model Training',
      organization: 'Business Incubation Center',
      year: '2023-2024',
      icon: '<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      title: 'Practical Tech and Development Skills',
      organization: 'DDU Business and Technology Incubation Center',
      year: '2023-2024',
      icon: '<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>'
    },
    {
      title: 'Enterprise Training',
      organization: 'BESYS Technologies',
      year: 'Current',
      icon: '<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 animate-fade-in-up">
          Education & Certifications
        </h2>
        <p className="text-center text-gray-500 mb-12 text-lg animate-fade-in-up animation-delay-200">Academic background and professional development</p>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up animation-delay-300">Education</h3>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="card p-8 md:p-10 animate-fade-in-up" style={{ animationDelay: `${(index + 4) * 0.15}s` }}>
                <div className="flex items-start gap-6">
                  <div 
                    className="p-4 rounded-xl bg-primary/10 text-primary flex-shrink-0"
                    dangerouslySetInnerHTML={{ __html: edu.icon }}
                  ></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-xl text-gray-600 mb-2">{edu.school}</p>
                    <p className="text-gray-500 mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {edu.location}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {edu.honors && (
                        <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
                          🎖️ Graduated with Honors
                        </span>
                      )}
                      <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">
                        📅 Class of {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up animation-delay-500">Certifications & Training</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="card p-6 hover:scale-105 transition-all border border-gray-100 group animate-fade-in-up" style={{ animationDelay: `${(index + 6) * 0.1}s` }}>
              <div 
                className="mb-4 inline-block p-3 rounded-lg bg-gray-50 text-primary group-hover:bg-primary/10 transition-colors"
                dangerouslySetInnerHTML={{ __html: cert.icon }}
              ></div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
              <p className="text-gray-600 text-sm mb-3">{cert.organization}</p>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}