'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/cart', label: 'Cart' },
  { href: '/account', label: 'Account' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`transition ${
            pathname === item.href
              ? 'text-cannabis-600 font-semibold'
              : 'text-gray-700 hover:text-cannabis-600'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
