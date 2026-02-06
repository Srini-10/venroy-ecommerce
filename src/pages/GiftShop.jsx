import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './GiftShop.css';

function GiftShop({ addToCart, toggleWishlist, wishlist }) {
    const giftProducts = products.filter(p => p.collection === 'gifts' || p.subcategory === 'sets');

    return (
        <div className="gift-shop-page">
            <div className="gift-shop-header">
                <div className="container">
                    <h1>Gift Shop</h1>
                    <p>Thoughtfully curated gift sets and special occasion pieces</p>
                </div>
            </div>

            <div className="container py-2xl">
                <section className="gift-intro mb-2xl">
                    <h2 className="text-center">The Art of Giving</h2>
                    <p className="text-center lead">
                        Discover our beautifully packaged gift sets, perfect for celebrating
                        life's special moments. Each set is carefully curated to embody the
                        VENROY aesthetic of effortless luxury.
                    </p>
                </section>

                <div className="product-grid grid-4">
                    {giftProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                            toggleWishlist={toggleWishlist}
                            isInWishlist={wishlist.some(item => item.id === product.id)}
                        />
                    ))}
                </div>

                <section className="gift-services py-2xl">
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">🎁</div>
                            <h3>Gift Wrapping</h3>
                            <p>Complimentary luxury gift wrapping on all orders</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">💌</div>
                            <h3>Personal Note</h3>
                            <p>Add a handwritten message to your gift</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">✨</div>
                            <h3>Special Packaging</h3>
                            <p>Premium packaging that makes every unboxing special</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default GiftShop;
