import './Concierge.css';

function Concierge() {
    return (
        <div className="concierge-page">
            <div className="concierge-header">
                <div className="container">
                    <h1>Concierge</h1>
                    <p>Your guide to the VENROY lifestyle</p>
                </div>
            </div>

            <div className="container py-2xl">
                <section className="concierge-section mb-2xl">
                    <h2>Our Story</h2>
                    <p className="lead">
                        VENROY was born from a love of travel, quality craftsmanship, and timeless design.
                        We create pieces that transition seamlessly from city to coast, embodying the spirit
                        of resort living wherever you are.
                    </p>
                    <p>
                        Our collection celebrates natural fabrics, refined silhouettes, and the art of slow
                        fashion. Each piece is designed in Australia and crafted with meticulous attention to
                        detail, ensuring longevity and enduring style.
                    </p>
                </section>

                <section className="concierge-section mb-2xl">
                    <h2>Travel Edit</h2>
                    <div className="travel-grid">
                        <div className="travel-card">
                            <img src="/images/palm_springs_poolside_1770356729073.png" alt="Palm Springs" />
                            <div className="travel-card-content">
                                <h3>Palm Springs</h3>
                                <p>Desert modernism meets poolside elegance</p>
                            </div>
                        </div>
                        <div className="travel-card">
                            <img src="/images/calabria_italy_banner_1770356623178.png" alt="Calabria" />
                            <div className="travel-card-content">
                                <h3>Calabria, Italy</h3>
                                <p>Mediterranean coastal charm</p>
                            </div>
                        </div>
                        <div className="travel-card">
                            <img src="/images/gold_coast_banner_1770356640736.png" alt="Gold Coast" />
                            <div className="travel-card-content">
                                <h3>Gold Coast</h3>
                                <p>Australian beachside luxury</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="concierge-section mb-2xl">
                    <h2>Playlists & Inspiration</h2>
                    <div className="playlist-grid">
                        <div className="playlist-card">
                            <div className="playlist-icon">🎵</div>
                            <h3>Poolside Sounds</h3>
                            <p>Curated tracks for lazy afternoons</p>
                        </div>
                        <div className="playlist-card">
                            <div className="playlist-icon">📖</div>
                            <h3>Reading List</h3>
                            <p>Books that inspire our collections</p>
                        </div>
                        <div className="playlist-card">
                            <div className="playlist-icon">✈️</div>
                            <h3>Travel Essentials</h3>
                            <p>What we pack for every journey</p>
                        </div>
                    </div>
                </section>

                <section className="concierge-section">
                    <h2>Sustainability</h2>
                    <p className="lead">
                        We believe in creating beautiful pieces that respect our planet. Our commitment to
                        sustainability is reflected in every decision we make.
                    </p>
                    <ul className="sustainability-list">
                        <li>Natural, breathable fabrics sourced responsibly</li>
                        <li>Timeless designs that transcend seasonal trends</li>
                        <li>Small-batch production to minimize waste</li>
                        <li>Transparent supply chain partnerships</li>
                        <li>Plastic-free packaging</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Concierge;
