import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Collection.css';

function ManCollection({ addToCart, toggleWishlist, wishlist }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('featured');

    const manProducts = products.filter(p => p.category === 'man');

    const filteredProducts = selectedCategory === 'all'
        ? manProducts
        : manProducts.filter(p => p.subcategory === selectedCategory);

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
    });

    return (
        <div className="collection-page">
            <div className="collection-header">
                <div className="container">
                    <h1>Man</h1>
                    <p>Elevated essentials for the discerning gentleman</p>
                </div>
            </div>

            <div className="container">
                <div className="collection-controls">
                    <div className="filter-buttons">
                        <button
                            className={selectedCategory === 'all' ? 'active' : ''}
                            onClick={() => setSelectedCategory('all')}
                        >
                            All
                        </button>
                        <button
                            className={selectedCategory === 'tops' ? 'active' : ''}
                            onClick={() => setSelectedCategory('tops')}
                        >
                            Tops
                        </button>
                        <button
                            className={selectedCategory === 'bottoms' ? 'active' : ''}
                            onClick={() => setSelectedCategory('bottoms')}
                        >
                            Bottoms
                        </button>
                        <button
                            className={selectedCategory === 'linen' ? 'active' : ''}
                            onClick={() => setSelectedCategory('linen')}
                        >
                            Linen
                        </button>
                    </div>

                    <select
                        className="sort-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name">Name</option>
                    </select>
                </div>

                <div className="product-grid grid-4 py-xl">
                    {sortedProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                            toggleWishlist={toggleWishlist}
                            isInWishlist={wishlist.some(item => item.id === product.id)}
                        />
                    ))}
                </div>

                {sortedProducts.length === 0 && (
                    <div className="no-products">
                        <p>No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ManCollection;
