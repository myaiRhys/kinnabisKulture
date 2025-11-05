'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';

interface AgeGateProps {
  isOpen: boolean;
  onVerify: () => void;
}

export default function AgeGate({ isOpen, onVerify }: AgeGateProps) {
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState('');

  const handleVerify = () => {
    if (!birthDate) {
      setError('Please enter your date of birth');
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    if (age < 18) {
      setError('You must be 18 or older to access this site');
      return;
    }

    onVerify();
  };

  return (
    <Modal isOpen={isOpen} onClose={() => {}} maxWidth="md">
      <div className="text-center">
        <div className="text-6xl mb-4">🌿</div>
        <h2 className="text-3xl font-bold mb-4">Age Verification Required</h2>
        <p className="text-gray-600 mb-6">
          You must be 18 years or older to access this site.
          Please verify your age to continue.
        </p>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => {
              setBirthDate(e.target.value);
              setError('');
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cannabis-500"
          />
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>

        <Button onClick={handleVerify} className="w-full">
          Verify Age
        </Button>

        <p className="text-xs text-gray-500 mt-4">
          By clicking &quot;Verify Age&quot;, you confirm that you are of legal age to purchase cannabis products in your jurisdiction.
        </p>
      </div>
    </Modal>
  );
}
