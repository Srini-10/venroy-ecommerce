import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css';

function Navigation({ cartCount }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        setActiveMenu(null);
    };

    const toggleSubmenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
        <>
            {/* Free Shipping Banner */}
            <div className="promo-banner">
                <p>Free Shipping on Orders Over $200</p>
            </div>

            {/* Main Navigation */}
            <nav className="navigation">
                <div className="nav-container">
                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>

                    {/* Logo */}
                    <Link to="/" className="logo">
                        <h1>VENROY</h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="nav-menu desktop-menu">
                        <li className="nav-item has-submenu">
                            <span>New In</span>
                            <div className="mega-menu">
                                <div className="mega-menu-content">
                                    <div className="menu-column">
                                        <h4>Woman</h4>
                                        <Link to="/woman">Latest Arrivals</Link>
                                        <Link to="/woman">Dresses</Link>
                                        <Link to="/woman">Clothing</Link>
                                    </div>
                                    <div className="menu-column">
                                        <h4>Man</h4>
                                        <Link to="/man">Latest Arrivals</Link>
                                        <Link to="/man">Shirts</Link>
                                        <Link to="/man">Bottoms</Link>
                                    </div>
                                    <div className="menu-column">
                                        <h4>Coming Soon</h4>
                                        <Link to="/">Spring Collection</Link>
                                        <Link to="/">Summer Essentials</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item has-submenu">
                            <Link to="/woman">Woman</Link>
                            <div className="mega-menu">
                                <div className="mega-menu-content">
                                    <div className="menu-column">
                                        <h4>Latest</h4>
                                        <Link to="/woman">New Arrivals</Link>
                                        <Link to="/woman">Best Sellers</Link>
                                        <Link to="/woman">Sale</Link>
                                    </div>
                                    <div className="menu-column">
                                        <h4>Dresses</h4>
                                        <Link to="/woman">Maxi Dresses</Link>
                                        <Link to="/woman">Midi Dresses</Link>
                                        <Link to="/woman">Slip Dresses</Link>
                                    </div>
                                    <div className="menu-column">
                                        <h4>Clothing</h4>
                                        <Link to="/woman">Tops</Link>
                                        <Link to="/woman">Pants</Link>
                                        <Link to="/woman">Linen</Link>
                                    </div>
                                    <div className="menu-column">
                                        <h4>Edits</h4>
                                        <Link to="/woman">Sets</Link>
                                        <Link to="/woman">Event Dressing</Link>
                                        <Link to="/woman">Vacation Edit</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item has-submenu">
                            <Link to="/man">Man</Link>
                            <div className="mega-menu">
                                <div className="mega-menu-content">
                                    <div className="menu-column">
                                        <h4>Latest</h4>
                                        <Link to="/man">New Arrivals</Link>
                                        <Link to="/man">Best Sellers</Link>
                                    </div>
                                    <div className="menu-column">
                                        <h4>Tops</h4>
                                        <Link to="/man">Shirts</Link>
                                        <Link to="/man">T-Shirts</Link>
                                        <Link to="/man">Knitwear</Link>
                                    </div>
                                    <div className="menu-column">
                                        <h4>Bottoms</h4>
                                        <Link to="/man">Pants</Link>
                                        <Link to="/man">Shorts</Link>
                                    </div>
                                    <div className="menu-column">
                                        <h4>Linen</h4>
                                        <Link to="/man">Linen Shirts</Link>
                                        <Link to="/man">Linen Pants</Link>
                                        <Link to="/man">Linen Sets</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item has-submenu">
                            <Link to="/concierge">Concierge</Link>
                            <div className="mega-menu">
                                <div className="mega-menu-content">
                                    <div className="menu-column">
                                        <Link to="/concierge">Collections</Link>
                                        <Link to="/concierge">Playlists</Link>
                                        <Link to="/concierge">Projects & Events</Link>
                                        <Link to="/concierge">About VENROY</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/gift-shop">Gift Shop</Link>
                        </li>
                    </ul>

                    {/* Cart Icon */}
                    <Link to="/cart" className="cart-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-content">
                        <div className="mobile-menu-item">
                            <button onClick={() => toggleSubmenu('newIn')}>
                                New In
                                <span className={`arrow ${activeMenu === 'newIn' ? 'open' : ''}`}>›</span>
                            </button>
                            {activeMenu === 'newIn' && (
                                <div className="mobile-submenu">
                                    <Link to="/woman" onClick={toggleMobileMenu}>Woman - Latest</Link>
                                    <Link to="/man" onClick={toggleMobileMenu}>Man - Latest</Link>
                                    <Link to="/" onClick={toggleMobileMenu}>Coming Soon</Link>
                                </div>
                            )}
                        </div>

                        <div className="mobile-menu-item">
                            <button onClick={() => toggleSubmenu('woman')}>
                                Woman
                                <span className={`arrow ${activeMenu === 'woman' ? 'open' : ''}`}>›</span>
                            </button>
                            {activeMenu === 'woman' && (
                                <div className="mobile-submenu">
                                    <Link to="/woman" onClick={toggleMobileMenu}>Latest</Link>
                                    <Link to="/woman" onClick={toggleMobileMenu}>Dresses</Link>
                                    <Link to="/woman" onClick={toggleMobileMenu}>Clothing</Link>
                                    <Link to="/woman" onClick={toggleMobileMenu}>Edits</Link>
                                </div>
                            )}
                        </div>

                        <div className="mobile-menu-item">
                            <button onClick={() => toggleSubmenu('man')}>
                                Man
                                <span className={`arrow ${activeMenu === 'man' ? 'open' : ''}`}>›</span>
                            </button>
                            {activeMenu === 'man' && (
                                <div className="mobile-submenu">
                                    <Link to="/man" onClick={toggleMobileMenu}>Latest</Link>
                                    <Link to="/man" onClick={toggleMobileMenu}>Tops</Link>
                                    <Link to="/man" onClick={toggleMobileMenu}>Bottoms</Link>
                                    <Link to="/man" onClick={toggleMobileMenu}>Linen</Link>
                                </div>
                            )}
                        </div>

                        <div className="mobile-menu-item">
                            <Link to="/concierge" onClick={toggleMobileMenu}>Concierge</Link>
                        </div>

                        <div className="mobile-menu-item">
                            <Link to="/gift-shop" onClick={toggleMobileMenu}>Gift Shop</Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && <div className="mobile-overlay" onClick={toggleMobileMenu}></div>}
            </nav>
        </>
    );
}

export default Navigation;
