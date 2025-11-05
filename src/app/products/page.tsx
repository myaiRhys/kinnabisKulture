'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilters from '@/components/products/ProductFilters';
import { MOCK_PRODUCTS } from '@/lib/mockData';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(MOCK_PRODUCTS);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilteredProducts(
        MOCK_PRODUCTS.filter(
          (p) => p.category === category.toLowerCase()
        )
      );
    } else {
      setFilteredProducts(MOCK_PRODUCTS);
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <ProductFilters />
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              {filteredProducts.length} products found
            </p>

            {/* Sort Dropdown */}
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
