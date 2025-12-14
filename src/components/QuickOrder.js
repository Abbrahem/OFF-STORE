import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';

const QuickOrder = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      Swal.fire({
        icon: 'warning',
        title: 'Select options',
        text: 'Please select size and color',
        confirmButtonColor: '#171717',
      });
      return;
    }
    addToCart(product, selectedSize, selectedColor, 1);
    Swal.fire({
      icon: 'success',
      title: 'Added to cart!',
      showConfirmButton: false,
      timer: 1200,
    });
    onClose();
  };

  const mainImage = product.images && product.images.length > 0 ? product.images[0] : '';

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40" onClick={onClose}>
      <div
        className="bg-white w-full max-w-lg rounded-t-3xl p-6 animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-5">
          <div className="flex gap-4">
            <img src={mainImage} alt={product.name} className="w-20 h-24 object-cover rounded-xl bg-neutral-100" />
            <div>
              <h3 className="font-display font-semibold text-neutral-900">{product.name}</h3>
              <p className="font-display text-xl font-bold text-neutral-900 mt-1">{product.price} EGP</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
            <FiX className="w-5 h-5 text-neutral-500" />
          </button>
        </div>

        {/* Size Selection */}
        <div className="mb-5">
          <p className="text-sm font-medium text-neutral-700 mb-2.5">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes?.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedSize === size
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-6">
          <p className="text-sm font-medium text-neutral-700 mb-2.5">Color</p>
          <div className="flex flex-wrap gap-2">
            {product.colors?.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedColor === color
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleAddToCart}
            className="flex-[7] btn-primary"
          >
            Add to Cart
          </button>
          <button
            onClick={onClose}
            className="flex-[3] btn-secondary"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickOrder;
