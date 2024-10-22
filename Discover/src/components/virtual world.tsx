import React from 'react';
import { CreationItem } from '../../types/types';

interface VirtualWorldsGalleryProps {
  items: CreationItem[];
}

export const VirtualWorldsGallery: React.FC<VirtualWorldsGalleryProps> = ({ items }) => {
  const worldItems = items.filter(item => item.category === 'Virtual Worlds');
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {worldItems.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
          <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-sm text-gray-600">by {item.creator}</p>
          <div className="mt-2">
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              Virtual World
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};