import React, { useState, useEffect } from 'react';

import { ArtGallery } from './Art/ArtGallery';
import { CollectiblesGallery } from './Collectibles/CollectiblesGallery';
import { VirtualWorldsGallery } from './VirtualWorlds/VirtualWorldsGallery';
import { CreationItem } from '../types/types';

export const MainGallery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [items, setItems] = useState<CreationItem[]>([]);

  useEffect(() => {
    // Simulated API call - replace with your actual API call
    const fetchItems = async () => {
      const response = await fetch('/api/items');
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  const filteredItems = items.filter(item =>
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.creator.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'All' || item.category === selectedCategory)
  );

  return (
    <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Discover and collect unique digital creations
      </h1>
      
      <div className="mb-6">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>
      
      <div className="mb-8">
        <CategoryTabs 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {selectedCategory === 'All' && (
        <>
          <h2 className="text-2xl font-semibold mb-6">Featured Art</h2>
          <ArtGallery items={filteredItems} />
          
          <h2 className="text-2xl font-semibold my-6">Popular Collectibles</h2>
          <CollectiblesGallery items={filteredItems} />
          
          <h2 className="text-2xl font-semibold my-6">Virtual Worlds</h2>
          <VirtualWorldsGallery items={filteredItems} />
        </>
      )}
      
      {selectedCategory === 'Art' && <ArtGallery items={filteredItems} />}
      {selectedCategory === 'Collectibles' && <CollectiblesGallery items={filteredItems} />}
      {selectedCategory === 'Virtual Worlds' && <VirtualWorldsGallery items={filteredItems} />}
    </div>
  );
};