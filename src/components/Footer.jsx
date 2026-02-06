import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="newsletter-section">
                        <h3>Stay Connected</h3>
                        <p>Receive updates on new arrivals, special offers, and our travel journal.</p>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                required
                            />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-column">
                            <h4>Shop</h4>
                            <ul>
                                <li><a href="/woman">Woman</a></li>
                                <li><a href="/man">Man</a></li>
                                <li><a href="/gift-shop">Gift Shop</a></li>
                                <li><a href="/">New Arrivals</a></li>
                                <li><a href="/">Sale</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>About</h4>
                            <ul>
                                <li><a href="/concierge">Our Story</a></li>
                                <li><a href="/concierge">Sustainability</a></li>
                                <li><a href="/concierge">Projects & Events</a></li>
                                <li><a href="/">Stockists</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Customer Care</h4>
                            <ul>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">Shipping & Returns</a></li>
                                <li><a href="/">Size Guide</a></li>
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">Care Instructions</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <a href="https://instagram.com" aria-label="Instagram">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="17.5" cy="6.5" r="1.5" />
                                    </svg>
                                </a>
                                <a href="https://facebook.com" aria-label="Facebook">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                                <a href="https://pinterest.com" aria-label="Pinterest">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                                        <path d="M12 7c-2.8 0-5 2.2-5 5 0 1.7.8 3 2 3.8 0-.3 0-.8.2-1.2l.6-2.5s-.2-.4-.2-.9c0-.9.5-1.5 1.1-1.5.5 0 .8.4.8.9 0 .5-.3 1.3-.5 2-.1.6.3 1 .8 1 1 0 1.7-1 1.7-2.5 0-1.3-.9-2.2-2.2-2.2-1.5 0-2.4 1.1-2.4 2.3 0 .5.1.9.4 1.1.1.1.1.2.1.3l-.2.7c0 .2-.1.2-.3.1-1.1-.5-1.8-2-1.8-3.2 0-1.7 1.2-3.2 3.5-3.2 1.8 0 3.2 1.3 3.2 3 0 1.8-1.1 3.3-2.7 3.3-.5 0-1-.3-1.2-.6l-.3 1.2c-.1.4-.4 1-.6 1.3.5.2 1 .3 1.6.3 2.8 0 5-2.2 5-5s-2.2-5-5-5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 VENROY. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="/">Privacy Policy</a>
                        <span>|</span>
                        <a href="/">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
