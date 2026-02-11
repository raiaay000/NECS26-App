import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  borderColor?: string;
  onClick?: () => void;
  featured?: boolean;
}

const PADDING = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-5'
};

export function Card({ 
  children, 
  className = '', 
  padding = 'md',
  borderColor = 'border-[rgba(62,121,255,0.22)]',
  onClick,
  featured = false
}: CardProps) {
  const finalBorderColor = featured ? 'border-[rgba(245,197,33,0.45)]' : borderColor;
  
  return (
    <div
      onClick={onClick}
      className={`rounded-[20px] border ${finalBorderColor} ${PADDING[padding]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{ backgroundImage: "linear-gradient(135deg, rgb(10, 18, 33) 0%, rgb(11, 23, 47) 100%)" }}
    >
      {children}
    </div>
  );
}