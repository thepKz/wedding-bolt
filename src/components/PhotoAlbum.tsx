import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoAlbumProps {
  onBack: () => void;
  onViewStory: () => void;
}

const PhotoAlbum: React.FC<PhotoAlbumProps> = ({ onBack, onViewStory }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả', count: 24 },
    { id: 'engagement', name: 'Lễ đính hôn', count: 8 },
    { id: 'prewedding', name: 'Ảnh cưới', count: 10 },
    { id: 'ceremony', name: 'Lễ cưới', count: 6 },
  ];

  const photos = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Lần đầu gặp nhau',
      category: 'engagement',
      description: 'Khoảnh khắc đầu tiên chúng tôi gặp nhau tại quán cà phê nhỏ',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ngày cầu hôn',
      category: 'engagement',
      description: 'Ngày anh quỳ gối cầu hôn em dưới ánh hoàng hôn',
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Chụp ảnh cưới',
      category: 'prewedding',
      description: 'Buổi chụp ảnh cưới đầu tiên của chúng tôi',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ảnh cưới biển',
      category: 'prewedding',
      description: 'Bộ ảnh cưới lãng mạn bên bờ biển Đà Nẵng',
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Lễ cưới',
      category: 'ceremony',
      description: 'Khoảnh khắc thiêng liêng trong lễ thành hôn',
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tiệc cưới',
      category: 'ceremony',
      description: 'Niềm vui trong tiệc cưới cùng gia đình và bạn bè',
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Kỷ niệm 1 năm',
      category: 'engagement',
      description: 'Kỷ niệm 1 năm yêu nhau tại nơi chúng tôi hẹn hò đầu tiên',
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Du lịch cùng nhau',
      category: 'prewedding',
      description: 'Chuyến du lịch đáng nhớ đến Hội An',
    },
  ];

  const filteredPhotos = currentCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === currentCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="section-padding pb-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair text-gradient mb-4">
                Album Cưới
              </h1>
              <p className="text-lg text-pale-slate/80">
                Những khoảnh khắc đẹp nhất trong hành trình yêu thương
              </p>
            </div>
            
            <div className="flex gap-3 mt-6 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onViewStory}
                className="px-6 py-3 rounded-full border-2 border-dusty-pink text-pale-slate hover:bg-dusty-pink/10 transition-all duration-300"
              >
                Câu chuyện
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBack}
                className="elegant-button px-6 py-3 rounded-full"
              >
                ← Trang chủ
              </motion.button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  currentCategory === category.id
                    ? 'elegant-button'
                    : 'bg-white/50 border border-dusty-pink/30 text-pale-slate hover:bg-dusty-pink/10'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Photo Grid */}
      <div className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="masonry-grid">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="masonry-item cursor-pointer"
                onClick={() => setSelectedPhoto(index)}
              >
                <div className="relative group">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="photo-overlay">
                    <div className="text-white">
                      <h3 className="text-xl font-medium mb-2">{photo.title}</h3>
                      <p className="text-sm opacity-90">{photo.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
                src={filteredPhotos[selectedPhoto].url}
                alt={filteredPhotos[selectedPhoto].title}
                className="w-full h-full object-contain rounded-2xl"
              />
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="text-xl font-medium text-pale-slate mb-2">
                    {filteredPhotos[selectedPhoto].title}
                  </h3>
                  <p className="text-pale-slate/80">
                    {filteredPhotos[selectedPhoto].description}
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-12 h-12 glass-card rounded-full flex items-center justify-center text-pale-slate text-xl hover:bg-white/30 transition-colors"
              >
                ×
              </button>
              
              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto(selectedPhoto > 0 ? selectedPhoto - 1 : filteredPhotos.length - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center text-pale-slate hover:bg-white/30 transition-colors"
              >
                ←
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto(selectedPhoto < filteredPhotos.length - 1 ? selectedPhoto + 1 : 0);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center text-pale-slate hover:bg-white/30 transition-colors"
              >
                →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PhotoAlbum;