import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const ITEMS_PER_PAGE = 9;

const Gallery = ({ galleries = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const totalPages = Math.ceil(galleries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentGalleries = galleries.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const showPrevImage = () => {
    if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
  };

  const showNextImage = () => {
    if (selectedIndex < galleries.length - 1) setSelectedIndex(selectedIndex + 1);
  };

  const closePreview = () => setSelectedIndex(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closePreview();
      if (e.key === 'ArrowLeft') showPrevImage();
      if (e.key === 'ArrowRight') showNextImage();
    };

    if (selectedIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedIndex]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-600 border border-blue-600 rounded-full mb-4 tracking-widest uppercase">
            Dokumentasi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
            Dokumentasi
          </h2>
          <p className="text-gray-500 text-base">
            Dokumentasi pekerjaan lapangan dan aplikasi
          </p>
        </div>

        {/* Gallery Grid */}
        {galleries.length === 0 ? (
          <p className="text-center text-gray-400">Belum ada dokumentasi yang ditambahkan.</p>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {currentGalleries.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedIndex(startIndex + index)}
              >
                <img
                  className="w-full h-auto object-cover rounded-lg bg-gray-100 hover:scale-105 transition-transform duration-300"
                  src={item.image}
                  alt={item.title ?? 'Gallery'}
                />
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-300 transition"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-4 py-2 rounded-lg transition ${
                  currentPage === i + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-300 transition"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* IMAGE PREVIEW MODAL */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closePreview}
        >
          <div
            className="relative flex items-center justify-center px-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closePreview}
              className="absolute -top-12 right-0 text-white text-2xl hover:scale-110 transition"
            >
              <FaTimes />
            </button>

            {/* Previous */}
            <button
              onClick={showPrevImage}
              disabled={selectedIndex === 0}
              className="absolute left-0 text-white text-3xl hover:scale-110 disabled:opacity-30 transition"
            >
              <FaChevronLeft />
            </button>

            {/* Image */}
            <img
              src={galleries[selectedIndex].image}
              alt={galleries[selectedIndex].title ?? ''}
              className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl"
            />

            {/* Counter */}
            <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {selectedIndex + 1} / {galleries.length}
            </p>

            {/* Next */}
            <button
              onClick={showNextImage}
              disabled={selectedIndex === galleries.length - 1}
              className="absolute right-0 text-white text-3xl hover:scale-110 disabled:opacity-30 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;