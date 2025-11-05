'use client';

import { useCartStore } from '@/lib/store/cartStore';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CartSummary() {
  const { getTotalPrice, getTotalItems } = useCartStore();
  const subtotal = getTotalPrice();
  const deliveryFee = 50; // Fixed delivery fee
  const total = subtotal + deliveryFee;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">R{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-semibold">R{deliveryFee.toFixed(2)}</span>
        </div>

        <div className="border-t pt-3">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-cannabis-600">R{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <Link href="/checkout">
        <Button className="w-full">
          Proceed to Checkout
        </Button>
      </Link>

      <p className="text-sm text-gray-500 mt-4 text-center">
        {getTotalItems()} items in cart
      </p>
    </div>
  );
}
