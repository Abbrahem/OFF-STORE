import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { API_URL } from '../config';

const Home = () => {
  const [latestProduct, setLatestProduct] = useState(null);
  const [, setLoading] = useState(true);

  const categories = [
    { name: 'Jacket', image: '/jacket.jpg' },
    { name: 'Pants', image: '/pants.jpg' },
    { name: 'Hoodies', image: '/hoodie.jpg' },
    { name: 'Crew-Neck', image: '/crow.jpg' },
  ];

  useEffect(() => {
    fetchLatestProduct();
  }, []);

  const fetchLatestProduct = async () => {
    try {
      const res = await fetch(`${API_URL}/api/products/latest`);
      const data = await res.json();
      setLatestProduct(data);
    } catch (error) {
      console.error('Error fetching latest product:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="h-[80vh] relative flex items-center justify-center mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-4 text-white/80">Premium Streetwear</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            OFF-STORE
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 text-white/90 max-w-md mx-auto">
            Discover our exclusive collection of premium streetwear
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-neutral-900 px-10 py-4 font-medium text-sm tracking-wide hover:bg-neutral-100 transition-all duration-200 rounded-full"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-3">Browse</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900">Categories</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/category/${cat.name.toLowerCase()}`}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden card-hover">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-neutral-900 font-display text-lg md:text-xl font-semibold text-center mt-3">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Product Section */}
      {latestProduct && (
        <section className="py-20 px-4 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-3">New Arrival</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900">Latest Drop</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Product Image */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100">
                <img
                  src={latestProduct.images?.[0]}
                  alt={latestProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Product Info */}
              <div className="text-center md:text-left">
                <p className="text-sm font-medium text-neutral-500 mb-2">{latestProduct.category}</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-3">{latestProduct.name}</h3>
                <p className="font-display text-3xl font-bold text-neutral-900 mb-6">{latestProduct.price} EGP</p>
                
                {/* Colors */}
                {latestProduct.colors?.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-neutral-700 mb-2">Available Colors</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {latestProduct.colors.map((color) => (
                        <span key={color} className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-lg text-sm">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Sizes */}
                {latestProduct.sizes?.length > 0 && (
                  <div className="mb-8">
                    <p className="text-sm font-medium text-neutral-700 mb-2">Available Sizes</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {latestProduct.sizes.map((size) => (
                        <span key={size} className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-lg text-sm">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <Link
                  to={`/product/${latestProduct._id}`}
                  className="inline-block btn-primary px-10 py-4 rounded-full"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Home;
