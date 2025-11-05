'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/types';
import { useCartStore } from '@/lib/store/cartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer"
      >
        {/* Product Image */}
        <div className="relative h-64 bg-gray-200">
          <Image
            src={product.imageUrl || '/images/placeholder-product.png'}
            alt={product.name}
            fill
            className="object-cover"
          />

          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {product.thcPercentage && (
              <span className="bg-cannabis-500 text-white text-xs px-2 py-1 rounded-full">
                {product.thcPercentage}% THC
              </span>
            )}
            {product.strainType && (
              <span className="bg-sky-500 text-white text-xs px-2 py-1 rounded-full capitalize">
                {product.strainType}
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {product.name}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-cannabis-600">
              R{product.price.toFixed(2)}
            </span>

            <button
              onClick={handleAddToCart}
              className="bg-cannabis-500 text-white p-2 rounded-lg hover:bg-cannabis-600 transition"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TODO: Quick view modal */}
      </motion.div>
    </Link>
  );
}
