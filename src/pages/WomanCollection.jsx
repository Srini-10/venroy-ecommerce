import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Collection.css';

function WomanCollection({ addToCart, toggleWishlist, wishlist }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('featured');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const womanProducts = products.filter(p => p.category === 'woman');

    const filteredProducts = selectedCategory === 'all'
        ? womanProducts
        : womanProducts.filter(p => p.subcategory === selectedCategory);

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
    });

    // Pagination
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const paginatedProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

    return (
        <div className="collection-page">
            <div className="collection-header">
                <div className="container">
                    <h1>Woman</h1>
                    <p>Refined leisurewear for the modern traveler</p>
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
                            className={selectedCategory === 'dresses' ? 'active' : ''}
                            onClick={() => setSelectedCategory('dresses')}
                        >
                            Dresses
                        </button>
                        <button
                            className={selectedCategory === 'clothing' ? 'active' : ''}
                            onClick={() => setSelectedCategory('clothing')}
                        >
                            Clothing
                        </button>
                        <button
                            className={selectedCategory === 'sets' ? 'active' : ''}
                            onClick={() => setSelectedCategory('sets')}
                        >
                            Sets
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
                    {paginatedProducts.map(product => (
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

                {totalPages > 1 && (
                    <div className="pagination">
                        <button
                            className="btn-pagination"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span className="page-info">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            className="btn-pagination"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WomanCollection;
