import React from 'react';

const Clients = ({ partners = [] }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full mb-4">
            Trusted Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Klien yang Memilih Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bergabung dengan perusahaan-perusahaan terdepan yang mempercayakan visi mereka kepada kami
          </p>
        </div>

        {partners.length === 0 ? (
          <p className="text-center text-gray-400">Belum ada partner yang ditambahkan.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group relative flex items-center justify-center p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/50 bg-white border border-gray-100 hover:border-indigo-200"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-14 md:h-20 w-auto object-contain grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110 group-hover:drop-shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;