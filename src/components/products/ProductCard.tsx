'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/types';
import { useCartStore } from '@/lib/store/cartStore';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);

    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
    });

    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden card-hover h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative h-64 bg-gray-200 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center text-8xl">
            {product.category === 'flower' && '🌸'}
            {product.category === 'edibles' && '🍪'}
            {product.category === 'paraphernalia' && '💨'}
            {product.category === 'concentrates' && '💎'}
            {product.category === 'vapes' && '🌬️'}
          </div>

          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {product.thcPercentage && (
              <span className="bg-cannabis-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                {product.thcPercentage}% THC
              </span>
            )}
            {product.strainType && (
              <span className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg capitalize">
                {product.strainType}
              </span>
            )}
            {product.stockQuantity < 10 && (
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Low Stock
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
              {product.name}
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-2xl font-bold text-cannabis-600">
              R{product.price.toFixed(2)}
            </span>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              disabled={isAdding || product.stockQuantity === 0}
              className={`p-3 rounded-lg transition-all duration-300 ${
                isAdding
                  ? 'bg-green-500 text-white'
                  : product.stockQuantity === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-cannabis-500 text-white hover:bg-cannabis-600 hover:shadow-lg'
              }`}
            >
              {isAdding ? (
                <span className="text-sm">✓</span>
              ) : (
                <ShoppingCart className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
