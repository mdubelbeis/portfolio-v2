import React from 'react';

interface ArrowUpProps {
  elementTarget: string;
  top: string;
}

const ArrowUp: React.FC<ArrowUpProps> = ({elementTarget, top}) => {
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
        </svg>
      </a>
    </div>
  );
};

export default ArrowUp;