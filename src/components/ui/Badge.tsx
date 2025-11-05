import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  className?: string;
}

export default function Badge({
  children,
  variant = 'primary',
  className = '',
}: BadgeProps) {
  const variants = {
    primary: 'bg-cannabis-500 text-white',
    secondary: 'bg-sky-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
  };

  return (
    <span
      className={`inline-block text-xs px-2 py-1 rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
