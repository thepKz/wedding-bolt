import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

// Sample photos - trong thực tế sẽ load từ API hoặc folder
const photos: Photo[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop',
    alt: 'Lần đầu gặp nhau',
    caption: 'Lần đầu gặp nhau tại quán cà phê nhỏ...'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop',
    alt: 'Chuyến du lịch đầu tiên',
    caption: 'Chuyến du lịch đầu tiên cùng nhau'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=500&fit=crop',
    alt: 'Lễ đính hôn',
    caption: 'Ngày anh cầu hôn em...'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=400&fit=crop',
    alt: 'Chuẩn bị cưới',
    caption: 'Chuẩn bị cho ngày trọng đại'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=600&fit=crop',
    alt: 'Pre-wedding',
    caption: 'Bộ ảnh cưới của chúng tôi'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop',
    alt: 'Gia đình',
    caption: 'Hai gia đình sum họp'
  }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-pink-100 py-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-rose-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <span className="text-3xl">📸</span>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
              Câu Chuyện Tình Yêu
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Những khoảnh khắc đẹp nhất trong hành trình yêu thương của chúng tôi 💕
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-medium">{photo.caption}</p>
                    </div>
                  </div>

                  {/* Heart icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                    <span className="text-rose-500">💖</span>
                  </div>
                </div>

                {/* Caption */}
                <div className="pt-4 text-center">
                  <p className="text-gray-700 font-medium">{photo.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
            <span className="text-2xl">💝</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          </div>
          <p className="text-gray-600 text-lg">
            Cùng chúng tôi tạo nên những kỷ niệm mới trong ngày cưới! 🥰
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Caption */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif text-gray-800 mb-2">{selectedPhoto.alt}</h3>
                <p className="text-gray-600">{selectedPhoto.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;