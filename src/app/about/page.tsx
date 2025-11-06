'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About KinnabisKulture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            South Africa&apos;s premier cannabis destination, bringing quality products
            directly to your door.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-7xl mb-6">🌿</div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              At KinnabisKulture, we believe in providing safe, legal access to premium
              cannabis products for South African adults. Our mission is to educate,
              empower, and deliver exceptional experiences to our community.
            </p>
            <p className="text-lg text-gray-700">
              We work with trusted local growers and manufacturers to ensure every
              product meets our rigorous quality standards. From flower to edibles,
              concentrates to accessories, we curate only the best for our customers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card rounded-2xl p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-4">✓</span>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Premium Quality</h4>
                  <p className="text-gray-300">Lab-tested products from trusted sources</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">✓</span>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Discreet Delivery</h4>
                  <p className="text-gray-300">Privacy-focused packaging and delivery</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">✓</span>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Expert Support</h4>
                  <p className="text-gray-300">Knowledgeable team ready to help</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">✓</span>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Legal Compliance</h4>
                  <p className="text-gray-300">Strict age verification and POPIA compliance</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We partner with environmentally conscious growers who use
                sustainable cultivation methods and organic practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                Building a supportive community of responsible cannabis users
                through education and shared experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                Every product is carefully selected and tested to ensure
                safety, potency, and consistency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Have questions? Our team is here to help. Reach out to us through
            any of the channels below.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl mb-2">📧</div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a href="mailto:info@kinnabiskulture.co.za" className="text-cannabis-600 hover:underline">
                info@kinnabiskulture.co.za
              </a>
            </div>

            <div>
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <a href="tel:+27215551234" className="text-cannabis-600 hover:underline">
                +27 21 555 1234
              </a>
            </div>

            <div>
              <div className="text-4xl mb-2">📍</div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-gray-600">Cape Town, South Africa</p>
            </div>
          </div>

          <div className="bg-cannabis-50 rounded-2xl p-8 border-2 border-cannabis-200">
            <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
            <div className="text-left max-w-sm mx-auto space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Experience the Difference?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8"
          >
            Browse our selection of premium cannabis products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/products" className="btn-secondary text-lg px-10 py-4">
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
