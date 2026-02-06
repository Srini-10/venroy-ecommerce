import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, destinations, collections } from '../data/products';
import './Homepage.css';

function Homepage({ addToCart, toggleWishlist, wishlist }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [parallaxOffset, setParallaxOffset] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1920&q=80",
            title: "Palm Springs Collection",
            subtitle: "Desert luxury meets poolside elegance"
        },
        {
            image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1920&q=80",
            title: "Calabria Edit",
            subtitle: "Mediterranean summer essentials"
        },
        {
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
            title: "Gold Coast",
            subtitle: "Coastal living refined"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            setParallaxOffset(scrolled * 0.5);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const featuredProducts = products.filter(p => p.featured).slice(0, 8);

    return (
        <div className="homepage">
            {/* Hero Carousel */}
            <section className="hero-carousel">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            transform: index === currentSlide ? `translateY(${parallaxOffset}px)` : 'none'
                        }}
                    >
                        <div className="carousel-content">
                            <h2 className="text-uppercase">{slide.title}</h2>
                            <p>{slide.subtitle}</p>
                            <Link to="/woman" className="btn btn-primary">Shop Now</Link>
                        </div>
                    </div>
                ))}

                <div className="carousel-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Temperature Widgets */}
            <section className="destinations-section py-2xl">
                <div className="container">
                    <h2 className="text-center mb-lg">Escape Destinations</h2>
                    <div className="destinations-grid">
                        {destinations.map((dest, index) => (
                            <div key={index} className="destination-card">
                                <div
                                    className="destination-image"
                                    style={{ backgroundImage: `url(${dest.image})` }}
                                >
                                    <div className="destination-overlay">
                                        <div className="temperature">{dest.temp}</div>
                                        <div className="weather">{dest.weather}</div>
                                    </div>
                                </div>
                                <h3 className="destination-name">{dest.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Collections */}
            <section className="collections-section py-xl">
                <div className="container">
                    <div className="collections-grid">
                        {collections.map((collection, index) => (
                            <Link
                                key={index}
                                to={collection.link}
                                className="collection-card"
                            >
                                <div
                                    className="collection-image"
                                    style={{ backgroundImage: `url(${collection.image})` }}
                                >
                                    <div className="collection-overlay">
                                        <h3 className="text-uppercase">{collection.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="featured-section py-2xl">
                <div className="container">
                    <h2 className="text-center mb-xl">New Arrivals</h2>
                    <div className="product-grid grid-4">
                        {featuredProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                                toggleWishlist={toggleWishlist}
                                isInWishlist={wishlist.some(item => item.id === product.id)}
                            />
                        ))}
                    </div>
                    <div className="text-center mt-xl">
                        <Link to="/woman" className="btn btn-secondary">View All</Link>
                    </div>
                </div>
            </section>

            {/* Lifestyle Section */}
            <section className="lifestyle-section py-2xl">
                <div className="container">
                    <h2 className="text-center mb-lg">The VENROY Lifestyle</h2>
                    <div className="lifestyle-grid">
                        <div className="lifestyle-item large">
                            <img src="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80" alt="VENROY Lifestyle" loading="lazy" />
                            <div className="lifestyle-caption">
                                <h3>Travel in Style</h3>
                                <p>Discover our curated travel essentials</p>
                            </div>
                        </div>
                        <div className="lifestyle-item">
                            <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80" alt="VENROY Lifestyle" loading="lazy" />
                        </div>
                        <div className="lifestyle-item">
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" alt="VENROY Lifestyle" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
