import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoGalleryProps {
  onBack: () => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onBack }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Lần đầu gặp nhau',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Kỷ niệm đặc biệt',
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Chuyến du lịch',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ngày cầu hôn',
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ảnh cưới',
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Chuẩn bị cưới',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen p-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-great-vibes text-gold mb-4 text-shadow-gold">
            Kỷ Niệm Của Chúng Tôi
          </h1>
          <p className="text-lg text-navy font-montserrat">
            Những khoảnh khắc đẹp trong hành trình yêu thương
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedPhoto(index)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover-lift"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{photo.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="px-8 py-3 bg-gradient-to-r from-gold to-rose-gold text-white font-semibold rounded-full hover-lift"
          >
            ← Quay lại
          </motion.button>
        </motion.div>
      </div>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[90vh] relative"
            >
              <img
                src={photos[selectedPhoto].url}
                alt={photos[selectedPhoto].title}
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="glass-effect p-4 rounded-xl">
                  <h3 className="text-white text-xl font-semibold">
                    {photos[selectedPhoto].title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl hover:bg-white/30 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PhotoGallery;