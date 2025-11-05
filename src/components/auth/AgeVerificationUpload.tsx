'use client';

import { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { api } from '@/lib/api/client';

export default function AgeVerificationUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    try {
      // TODO: Integrate with Onfido API
      await api.uploadIdDocument(file);
      setUploaded(true);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Age Verification</h2>
        <p className="text-gray-600 mb-6">
          To comply with legal regulations, we need to verify your age.
          Please upload a clear photo of your ID document.
        </p>

        {!uploaded ? (
          <>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
              <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 mb-4">
                {file ? file.name : 'Click to upload your ID document'}
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="id-upload"
              />
              <label htmlFor="id-upload">
                <span className="inline-block px-6 py-3 border-2 border-cannabis-500 text-cannabis-600 hover:bg-cannabis-50 rounded-lg font-semibold cursor-pointer transition-all">
                  Choose File
                </span>
              </label>
            </div>

            <Button
              onClick={handleUpload}
              disabled={!file || uploading}
              className="w-full"
            >
              {uploading ? 'Uploading...' : 'Upload Document'}
            </Button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Your document will be securely processed and deleted after verification.
              We take your privacy seriously.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h3 className="text-2xl font-bold mb-2">Document Uploaded</h3>
            <p className="text-gray-600">
              Your document is being reviewed. You will be notified once verification is complete.
            </p>
          </div>
        )}
      </div>

      {/* TODO: Integrate with Onfido SDK for real-time verification */}
    </div>
  );
}
