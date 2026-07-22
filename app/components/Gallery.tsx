'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: '/myimages/primary.png', alt: 'Profile Photo', title: 'Profile' },
    { src: '/myimages/graduate1.png', alt: 'Graduation Photo 1', title: 'Graduation' },
    { src: '/myimages/graduate2.png', alt: 'Graduation Photo 2', title: 'Graduation' },
    { src: '/myimages/graduate3.png', alt: 'Graduation Photo 3', title: 'Graduation' },
    { src: '/myimages/graduate4.png', alt: 'Graduation Photo 4', title: 'Graduation' },
    { src: '/myimages/graduate5.png', alt: 'Graduation Photo 5', title: 'Graduation' },
    { src: '/myimages/church1.png', alt: 'Church Activity 1', title: 'Church' },
    { src: '/myimages/church2.png', alt: 'Church Activity 2', title: 'Church' },
    { src: '/myimages/football1.png', alt: 'Football 1', title: 'Football' },
    { src: '/myimages/football2.png', alt: 'Football 2', title: 'Football' },
    { src: '/myimages/startup.png', alt: 'Startup Event', title: 'Startup' },
    { src: '/myimages/startup2.png', alt: 'Startup Event 2', title: 'Startup' },
    { src: '/myimages/shity.png', alt: 'Additional Photo', title: 'Moments' },
    { src: '/myimages/coding1.png', alt: 'Late Night Coding Session', title: 'Late Night Coding' },
    { src: '/myimages/coding2.png', alt: 'Deep Focus Programming', title: 'Deep Focus Coding' },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 animate-fade-in-up">
          Photo Gallery
        </h2>
        <p className="text-center text-gray-500 mb-12 text-lg animate-fade-in-up animation-delay-200">Moments from my journey</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden bg-white p-2 cursor-pointer hover:scale-105 transition-all border border-gray-200 hover:border-primary shadow-sm hover:shadow-lg group animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 0.05}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-semibold text-sm">{image.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-white/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-screen">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-gray-600 hover:text-primary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}