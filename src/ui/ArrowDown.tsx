import React from 'react';

interface ArrowDownProps {
  elementTarget: string;
  top?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ elementTarget, top }) => {
  return (
    <div className={`relative ${top} animate-bounce`}>
      <a href={elementTarget}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-12 w-12"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </div>
  );
};

export default ArrowDown;
