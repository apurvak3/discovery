import React from 'react';
import { CreationItem } from './DigitalCreationsGallery';

interface CollectiblesGalleryProps {
  items: CreationItem[];
}

export const CollectiblesGallery: React.FC<CollectiblesGalleryProps> = ({ items }) => {
  const collectibleItems = items.filter(item => item.category === 'Collectibles');
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {collectibleItems.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
          <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-sm text-gray-600">by {item.creator}</p>
          <div className="mt-2">
            <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
              Collectible
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
