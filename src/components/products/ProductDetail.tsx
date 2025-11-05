'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';
import type { Product } from '@/lib/types';
import { useCartStore } from '@/lib/store/cartStore';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div>
        <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Info Section */}
      <div>
        <div className="flex gap-2 mb-4">
          <Badge variant="primary">{product.category}</Badge>
          {product.strainType && (
            <Badge variant="secondary">{product.strainType}</Badge>
          )}
        </div>

        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

        <p className="text-3xl font-bold text-cannabis-600 mb-6">
          R{product.price.toFixed(2)}
        </p>

        <p className="text-gray-700 mb-6">{product.description}</p>

        {/* THC/CBD Info */}
        {(product.thcPercentage || product.cbdPercentage) && (
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-2">Cannabinoid Profile</h3>
            {product.thcPercentage && (
              <p className="text-sm">THC: {product.thcPercentage}%</p>
            )}
            {product.cbdPercentage && (
              <p className="text-sm">CBD: {product.cbdPercentage}%</p>
            )}
          </div>
        )}

        {/* Quantity Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button onClick={handleAddToCart} className="flex-1">
            <ShoppingCart className="w-5 h-5 mr-2 inline" />
            Add to Cart
          </Button>
          <button className="p-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50">
            <Heart className="w-6 h-6" />
          </button>
          <button className="p-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50">
            <Share2 className="w-6 h-6" />
          </button>
        </div>

        {/* Stock Info */}
        <p className="text-sm text-gray-500 mt-4">
          {product.stockQuantity > 0
            ? `${product.stockQuantity} in stock`
            : 'Out of stock'}
        </p>
      </div>
    </div>
  );
}
