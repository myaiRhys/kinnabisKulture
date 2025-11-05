'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import type { CartItem as CartItemType } from '@/lib/types';
import { useCartStore } from '@/lib/store/cartStore';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
      {/* Image */}
      <div className="relative w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{item.name}</h3>
        <p className="text-cannabis-600 font-bold">R{item.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
          className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
          className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Subtotal */}
      <div className="w-24 text-right">
        <p className="font-bold">R{(item.price * item.quantity).toFixed(2)}</p>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeItem(item.productId)}
        className="text-red-500 hover:text-red-700"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
