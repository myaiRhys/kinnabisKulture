'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function AccountPage() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    if (!isAuthenticated || !user) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <div className="w-20 h-20 bg-cannabis-100 rounded-full flex items-center justify-center text-3xl mb-3">
                👤
              </div>
              <h2 className="text-xl font-bold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'profile'
                    ? 'bg-cannabis-100 text-cannabis-700 font-semibold'
                    : 'hover:bg-gray-100'
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'orders'
                    ? 'bg-cannabis-100 text-cannabis-700 font-semibold'
                    : 'hover:bg-gray-100'
                }`}
              >
                Orders
              </button>
              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === 'addresses'
                    ? 'bg-cannabis-100 text-cannabis-700 font-semibold'
                    : 'hover:bg-gray-100'
                }`}
              >
                Addresses
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
              >
                Logout
              </button>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeTab === 'profile' && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Profile Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <p className="text-lg">{user.firstName}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <p className="text-lg">{user.lastName}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <p className="text-lg">{user.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age Verification Status
                  </label>
                  <div className="mt-2">
                    {user.ageVerified ? (
                      <Badge variant="success">Verified ✓</Badge>
                    ) : (
                      <Badge variant="warning">Pending Verification</Badge>
                    )}
                  </div>
                </div>

                <Button variant="outline" className="mt-6">
                  Edit Profile
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Order History</h2>

              <div className="text-center py-12 text-gray-500">
                <div className="text-6xl mb-4">📦</div>
                <p>No orders yet</p>
                <p className="text-sm mt-2">
                  When you place an order, it will appear here.
                </p>
              </div>

              {/* TODO: Display actual orders */}
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Saved Addresses</h2>

              <div className="text-center py-12 text-gray-500">
                <div className="text-6xl mb-4">🏠</div>
                <p>No saved addresses</p>
                <p className="text-sm mt-2">
                  Add a delivery address to make checkout faster.
                </p>
              </div>

              <Button variant="outline" className="mt-6">
                Add Address
              </Button>

              {/* TODO: Display and manage addresses */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
