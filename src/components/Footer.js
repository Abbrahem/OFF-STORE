import React from 'react';
import { FaTiktok, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-12 mt-16 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <img src="/logo.jpg" alt="OFF-STORE" className="w-16 h-16 rounded-full object-cover mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-900 mb-2">
          OFF-STORE
        </h3>
        <p className="text-neutral-600 text-sm mb-1">🔥 Streetwear • Vintage • Casual drip</p>
        <p className="text-neutral-500 text-sm mb-4">Be bold. Be Off.</p>
        <p className="text-neutral-500 text-sm mb-6">
          📍 25 عمارات الفتح، حي السفارات، مدينة نصر - بجوار السجل المدني
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <a 
            href="https://www.tiktok.com/@off_store4" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition-all duration-200"
          >
            <FaTiktok className="w-4 h-4" />
          </a>
          <a 
            href="https://www.instagram.com/off_store96/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition-all duration-200"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <a 
            href="https://wa.me/201012058699" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition-all duration-200"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>
        </div>
        <p className="text-neutral-400 text-sm">© 2024 OFF-STORE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
