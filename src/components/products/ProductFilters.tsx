'use client';

import { useState } from 'react';

interface ProductFiltersProps {
  onFilterChange?: (filters: any) => void;
}

export default function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [strainType, setStrainType] = useState('');

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    onFilterChange?.({ category: value, priceRange, strainType });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">Filters</h3>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500"
        >
          <option value="">All Categories</option>
          <option value="flower">Flower</option>
          <option value="edibles">Edibles</option>
          <option value="paraphernalia">Paraphernalia</option>
          <option value="concentrates">Concentrates</option>
          <option value="vapes">Vapes</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500"
        >
          <option value="">All Prices</option>
          <option value="0-100">R0 - R100</option>
          <option value="100-200">R100 - R200</option>
          <option value="200-300">R200 - R300</option>
          <option value="300+">R300+</option>
        </select>
      </div>

      {/* Strain Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Strain Type
        </label>
        <select
          value={strainType}
          onChange={(e) => setStrainType(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500"
        >
          <option value="">All Strains</option>
          <option value="indica">Indica</option>
          <option value="sativa">Sativa</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      {/* TODO: Add more filters */}
    </div>
  );
}
