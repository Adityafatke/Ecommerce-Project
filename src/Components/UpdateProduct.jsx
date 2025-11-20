import React from 'react';

const UpdateProduct = ({ product, onUpdate, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <img
          src={product.ImagePath}
          alt={product.Name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h2 className="text-lg font-semibold">{product.Name}</h2>
          <p className="text-sm text-gray-600">{product.Description}</p>
          <p className="text-sm text-gray-500">Category: {product.Category}</p>
          <p className="text-sm text-green-600 font-bold">₹{product.Price}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onUpdate(product)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Update
        </button>
        <button
          onClick={() => onDelete(product)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;