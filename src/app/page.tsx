'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductCard from '@/components/products/ProductCard';
import { MOCK_PRODUCTS } from '@/lib/mockData';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [floatingLeaves, setFloatingLeaves] = useState<Array<{x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Generate random positions for floating leaves
    const leaves = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setFloatingLeaves(leaves);
  }, []);

  const featuredProducts = MOCK_PRODUCTS.slice(0, 8);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
        {/* Animated floating leaves */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingLeaves.map((leaf, i) => (
            <motion.div
              key={i}
              className="absolute text-5xl opacity-20"
              style={{ left: `${leaf.x}%`, top: `${leaf.y}%` }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: leaf.delay,
              }}
            >
              🍃
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight"
          >
            Premium Cannabis
            <br />
            <span className="text-sky-300">Delivered</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 leading-relaxed"
          >
            South Africa&apos;s finest selection of cannabis products.
            <br />Secure, discreet, and delivered to your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/products" className="btn-primary text-lg px-10 py-4">
              Shop Now
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-10 py-4">
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">Shop by Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Flower', emoji: '🌸', category: 'flower' },
            { name: 'Edibles', emoji: '🍪', category: 'edibles' },
            { name: 'Accessories', emoji: '💨', category: 'paraphernalia' },
          ].map((cat) => (
            <Link key={cat.category} href={`/products?category=${cat.category}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-64 bg-gradient-card rounded-2xl overflow-hidden card-hover cursor-pointer group"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {cat.emoji}
                  </div>
                  <h3 className="text-3xl font-bold">{cat.name}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Featured Products</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Hand-picked selection of our best sellers
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary text-lg">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { icon: '🔒', title: 'Secure & Private', desc: 'POPIA compliant. Your data is encrypted and protected.' },
            { icon: '🚚', title: 'Fast Delivery', desc: 'Same-day delivery in Cape Town. Nationwide in 2-3 days.' },
            { icon: '✅', title: 'Age Verified', desc: 'Strict ID verification. 21+ only. Legal compliance guaranteed.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
