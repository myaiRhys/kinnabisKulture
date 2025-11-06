import { notFound } from 'next/navigation';
import ProductDetail from '@/components/products/ProductDetail';
import { MOCK_PRODUCTS } from '@/lib/mockData';

export function generateStaticParams() {
  return MOCK_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = MOCK_PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />

      {/* Related Products Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* TODO: Add related products */}
          <p className="text-gray-500">Related products coming soon...</p>
        </div>
      </section>
    </div>
  );
}
