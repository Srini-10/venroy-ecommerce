import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

function ProductDetail({ addToCart, toggleWishlist, wishlist }) {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
    const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
    const [mainImage, setMainImage] = useState(0);

    if (!product) {
        return (
            <div className="container py-2xl">
                <h2>Product not found</h2>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        );
    }

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const handleAddToCart = () => {
        addToCart(product, selectedSize, selectedColor);
    };

    return (
        <div className="product-detail-page">
            <div className="container py-xl">
                <div className="product-detail-grid">
                    {/* Product Images */}
                    <div className="product-gallery">
                        <div className="main-image">
                            <img src={product.images[mainImage]} alt={product.name} />
                        </div>
                        <div className="thumbnail-images">
                            {product.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`thumbnail ${mainImage === index ? 'active' : ''}`}
                                    onClick={() => setMainImage(index)}
                                >
                                    <img src={image} alt={`${product.name} ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="product-details">
                        <nav className="breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <Link to={`/${product.category}`}>{product.category}</Link>
                            <span>/</span>
                            <span>{product.name}</span>
                        </nav>

                        <h1>{product.name}</h1>
                        <p className="product-price-large">${product.price}</p>
                        <p className="product-description">{product.description}</p>

                        {/* Color Selection */}
                        <div className="selection-group">
                            <label>Color: <strong>{selectedColor}</strong></label>
                            <div className="color-swatches">
                                {product.colors.map((color, index) => (
                                    <button
                                        key={index}
                                        className={`color-swatch ${selectedColor === color ? 'selected' : ''}`}
                                        onClick={() => setSelectedColor(color)}
                                        title={color}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="selection-group">
                            <label>Size: <strong>{selectedSize}</strong></label>
                            <div className="size-buttons">
                                {product.sizes.map((size, index) => (
                                    <button
                                        key={index}
                                        className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="product-actions-detail">
                            <button
                                className="btn btn-primary btn-add-to-cart"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                            <button
                                className={`btn-wishlist-detail ${wishlist.some(item => item.id === product.id) ? 'active' : ''}`}
                                onClick={() => toggleWishlist(product)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill={wishlist.some(item => item.id === product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                                Add to Wishlist
                            </button>
                        </div>

                        {/* Product Details Accordion */}
                        <div className="product-info-accordion">
                            <details>
                                <summary>Shipping & Returns</summary>
                                <p>Free shipping on orders over $200. Returns accepted within 30 days.</p>
                            </details>
                            <details>
                                <summary>Care Instructions</summary>
                                <p>Machine wash cold. Tumble dry low. Iron on low heat if needed.</p>
                            </details>
                            <details>
                                <summary>Size Guide</summary>
                                <p>Our pieces are designed for a relaxed fit. For specific measurements, please contact us.</p>
                            </details>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="related-products py-2xl">
                        <h2 className="text-center mb-xl">You May Also Like</h2>
                        <div className="product-grid grid-4">
                            {relatedProducts.map(relatedProduct => (
                                <ProductCard
                                    key={relatedProduct.id}
                                    product={relatedProduct}
                                    addToCart={addToCart}
                                    toggleWishlist={toggleWishlist}
                                    isInWishlist={wishlist.some(item => item.id === relatedProduct.id)}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}

export default ProductDetail;
