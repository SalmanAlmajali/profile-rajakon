import React from 'react';

const galleryItems = [
  { src: '/images/gallery/1.jpeg', },
  { src: '/images/gallery/2.jpeg', },
  { src: '/images/gallery/3.jpeg', },
  { src: 'public/images/gallery/maintenance monitoring.jpeg', },
  { src: '/images/gallery/maintenannce monitoring2.jpeg', },
  { src: '/images/gallery/maintenannce monitoring3.jpeg', },
  { src: '/images/gallery/rapat bapenda.jpeg', },
  { src: '/images/gallery/rapat bapenda2.jpeg', },
  { src: '/images/gallery/rapat bapenda3.jpeg', },
  { src: '/images/gallery/rapat bapenda4.jpeg', },
  { src: '/images/gallery/rapat bapenda5.jpeg', },
  // tambah gambar lain sesuai kebutuhan
];

const Dokumentasi = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-5 py-1.5 text-sm md:text-base font-semibold text-blue-600 bg-blue-50 rounded-full mb-4 tracking-wide">
            DOKUMENTASI
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dokumentasi
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Dokumentasi pekerjaan lapangan dan aplikasi
          </p>
        </div>

        {/* Masonry layout pakai columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 space-y-5 md:space-y-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="break-inside-avoid mb-5 md:mb-6 group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
            >
              <img
                src={item.src}
                className="w-full h-auto object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        {/* <div className="text-center mt-12 md:mt-16">
          <a
            href="#kontak"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            Konsultasi Gratis →
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Dokumentasi;