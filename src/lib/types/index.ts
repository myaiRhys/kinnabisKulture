export interface Product {
  id: string;
  sku: string;
  name: string;
  category: 'flower' | 'edibles' | 'paraphernalia' | 'concentrates' | 'vapes';
  description: string;
  thcPercentage?: number;
  cbdPercentage?: number;
  price: number;
  stockQuantity: number;
  imageUrl: string;
  imageUrls: string[];
  strainType?: 'indica' | 'sativa' | 'hybrid';
  isActive: boolean;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  ageVerified: boolean;
  ageVerificationStatus: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  status: 'pending' | 'confirmed' | 'processing' | 'out_for_delivery' | 'delivered' | 'cancelled';
  subtotal: number;
  deliveryFee: number;
  total: number;
  paymentMethod: string;
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  items: OrderItem[];
  deliveryAddress: Address;
  createdAt: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface Address {
  id: string;
  streetAddress: string;
  suburb: string;
  city: string;
  province: string;
  postalCode: string;
  isDefault: boolean;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
