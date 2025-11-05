'use client';

import Link from 'next/link';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useCartStore } from '@/lib/store/cartStore';

export default function Header() {
  const items = useCartStore((state) => state.items);
  const cartCount = items.length;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-cannabis-600">
            🌿 CannaShop
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/products"
              className="text-gray-700 hover:text-cannabis-600 transition"
            >
              Products
            </Link>
            <Link
              href="/products?category=flower"
              className="text-gray-700 hover:text-cannabis-600 transition"
            >
              Flower
            </Link>
            <Link
              href="/products?category=edibles"
              className="text-gray-700 hover:text-cannabis-600 transition"
            >
              Edibles
            </Link>
            <Link
              href="/products?category=paraphernalia"
              className="text-gray-700 hover:text-cannabis-600 transition"
            >
              Paraphernalia
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-cannabis-600 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-cannabis-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link href="/account">
              <User className="w-6 h-6 text-gray-700 hover:text-cannabis-600 transition" />
            </Link>

            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* TODO: Add mobile menu */}
    </header>
  );
}
