import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  Award, 
  ExternalLink, 
  Download, 
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Filter
} from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Mock image data - replace with your actual image imports from the three folders
const mockFlickrImages = [
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop', name: 'Mountain Landscape', filename: 'mountain-landscape.jpg' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop', name: 'Forest Path', filename: 'forest-path.jpg' },
  { src: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=500&fit=crop', name: 'Ocean Sunset', filename: 'ocean-sunset.jpg' },
  { src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=500&fit=crop', name: 'Desert Dunes', filename: 'desert-dunes.jpg' },
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=500&fit=crop', name: 'Autumn Forest', filename: 'autumn-forest.jpg' },
  { src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&h=500&fit=crop', name: 'Lake Reflection', filename: 'lake-reflection.jpg' },
];

const mockGeneratedImages = [
  { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop', name: 'AI Abstract Art', filename: 'ai-abstract-1.jpg' },
  { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=500&fit=crop', name: 'Digital Painting', filename: 'digital-painting.jpg' },
  { src: 'https://images.unsplash.com/photo-1614850523060-8da7d73b83dc?w=500&h=500&fit=crop', name: 'Generated Portrait', filename: 'generated-portrait.jpg' },
  { src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&h=500&fit=crop', name: 'Neural Network Art', filename: 'neural-art.jpg' },
];

const mockCertImages = [
  { src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop', name: 'Python Data Science Certificate', filename: 'python-cert.jpg' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', name: 'Machine Learning Certificate', filename: 'ml-cert.jpg' },
  { src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop', name: 'Web Development Certificate', filename: 'web-dev-cert.jpg' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', name: 'Data Analysis Certificate', filename: 'data-analysis-cert.jpg' },
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', name: 'Business Analytics Certificate', filename: 'business-cert.jpg' },
  { src: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop', name: 'Cloud Computing Certificate', filename: 'cloud-cert.jpg' },
];

// Helper function to process images
const processImages = (imageArray, category) => {
  return imageArray.map(image => ({
    ...image,
    category: category
  }));
};

export function ImageGallerySections() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const galleryRef = useRef(null);
  const certsRef = useRef(null);
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const isCertsInView = useInView(certsRef, { once: true, margin: "-100px" });

  // Process all images
  const flickrCollection = processImages(mockFlickrImages, 'flickr');
  const generatedCollection = processImages(mockGeneratedImages, 'generated');
  const certCollection = processImages(mockCertImages, 'certification');

  // Combine photography collections
  const photographyImages = [...flickrCollection, ...generatedCollection];

  // Filter photography images
  const filteredPhotographyImages = activeFilter === 'all' 
    ? photographyImages 
    : photographyImages.filter(img => img.category === activeFilter);

  const openLightbox = (image, collection) => {
    setSelectedImage({ ...image, collection });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImage.collection.findIndex(
      img => img.src === selectedImage.src
    );
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % selectedImage.collection.length;
    } else {
      newIndex = currentIndex === 0 ? selectedImage.collection.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage({
      ...selectedImage.collection[newIndex],
      collection: selectedImage.collection
    });
  };

  return (
    <div>
      {/* Photography Gallery Section */}
      <section id="photography" className="py-20" ref={galleryRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl mb-4">Photography Gallery</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A curated collection of my photography work and generated images
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center gap-4 mb-12"
            >
              <Button
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('all')}
                size="sm"
              >
                <Filter className="w-4 h-4 mr-2" />
                All Images
              </Button>
              <Button
                variant={activeFilter === 'flickr' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('flickr')}
                size="sm"
              >
                Flickr Collection
              </Button>
              <Button
                variant={activeFilter === 'generated' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('generated')}
                size="sm"
              >
                Generated Art
              </Button>
            </motion.div>

            {/* Photography Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              layout
            >
              <AnimatePresence>
                {filteredPhotographyImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isGalleryInView ? { opacity: 1, scale: 1 } : {}}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="group cursor-pointer"
                    onClick={() => openLightbox(image, filteredPhotographyImages)}
                  >
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-medium text-sm mb-1 capitalize">
                              {image.name}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                              {image.category === 'flickr' ? 'Photography' : 'Generated Art'}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <ZoomIn className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-muted/50" ref={certsRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isCertsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl mb-4">Professional Certifications</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My journey of continuous learning and professional development
              </p>
            </motion.div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certCollection.map((cert, index) => (
                <motion.div
                  key={cert.src}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isCertsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="group hover:shadow-lg transition-shadow h-full">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <div className="aspect-[4/3] overflow-hidden bg-muted/30">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={cert.src}
                            alt={cert.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-medium text-lg mb-4 capitalize">
                        {cert.name}
                      </h3>
                      <div className="flex gap-3">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            size="sm" 
                            onClick={() => openLightbox(cert, certCollection)}
                          >
                            <ZoomIn className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              const link = document.createElement('a');
                              link.href = cert.src;
                              link.download = cert.filename;
                              link.click();
                            }}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.name}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              {selectedImage.collection && selectedImage.collection.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-2"
                    onClick={() => navigateImage('prev')}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-2"
                    onClick={() => navigateImage('next')}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white text-xl font-medium mb-2 capitalize">
                  {selectedImage.name}
                </h3>
                <Badge variant="secondary">
                  {selectedImage.category === 'flickr' ? 'Photography' : 
                   selectedImage.category === 'generated' ? 'Generated Art' : 
                   'Professional Certification'}
                </Badge>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}