import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product, addToCart, toggleWishlist, isInWishlist }) {
    const handleQuickAdd = () => {
        addToCart(product, product.sizes[0], product.colors[0]);
    };

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`} className="product-image-link">
                <div className="product-images">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="product-image primary"
                        loading="lazy"
                    />
                    {product.images[1] && (
                        <img
                            src={product.images[1]}
                            alt={product.name}
                            className="product-image secondary"
                            loading="lazy"
                        />
                    )}
                </div>
            </Link>

            <div className="product-info">
                <Link to={`/product/${product.id}`}>
                    <h3 className="product-name">{product.name}</h3>
                </Link>
                <p className="product-price">${product.price}</p>

                <div className="product-colors">
                    {product.colors.slice(0, 3).map((color, index) => (
                        <span
                            key={index}
                            className="color-dot"
                            title={color}
                            style={{ backgroundColor: color.toLowerCase() }}
                        ></span>
                    ))}
                </div>
            </div>

            <div className="product-actions">
                <button
                    className="btn btn-primary btn-quick-add"
                    onClick={handleQuickAdd}
                >
                    Quick Add
                </button>
                <button
                    className={`btn-wishlist ${isInWishlist ? 'active' : ''}`}
                    onClick={() => toggleWishlist(product)}
                    aria-label="Add to wishlist"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
