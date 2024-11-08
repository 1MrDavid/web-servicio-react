import React from 'react';

export default function ServiceCard({ image, title, text }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-4 bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2">{title}</h1>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  );
}
