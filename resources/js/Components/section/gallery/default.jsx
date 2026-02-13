import React from 'react';

const Gallery = ({ galleries = [] }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header persis seperti live site */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
            DOKUMENTASI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Dokumentasi Proyek
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Dokumentasi pekerjaan lapangan dan aplikasi
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleries.length > 0 ? (
            galleries.map((item) => (
              <div 
                key={item.id} 
                className="break-inside-avoid mb-4 md:mb-6"
              >
                <img
                  className="w-full h-auto object-cover rounded-lg"
                  src={item.image}
                  alt={item.title || 'Dokumentasi proyek'}
                  loading="lazy"
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg col-span-full py-12">
              Belum ada dokumentasi yang ditambahkan.
            </p>
          )}
        </div>

        {/* Tombol CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="#kontak"
            className="
              inline-flex items-center px-8 py-4
              text-lg font-medium text-white
              bg-blue-600 hover:bg-blue-700
              rounded-full
              shadow-md
              transition-all duration-200
              transform hover:scale-105
            "
          >
            Lihat Dokumentasi Lengkap →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;