import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, updateQuantity, removeFromCart }) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 200 ? 0 : 15;
    const total = subtotal + shipping;

    return (
        <div className="cart-page">
            <div className="container py-xl">
                <h1 className="text-center mb-xl">Shopping Cart</h1>

                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <h2>Your cart is empty</h2>
                        <p>Start shopping to add items to your cart.</p>
                        <Link to="/woman" className="btn btn-primary">Shop Woman</Link>
                    </div>
                ) : (
                    <div className="cart-grid">
                        <div className="cart-items">
                            {cart.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <div className="cart-item-image">
                                        <img src={item.images[0]} alt={item.name} />
                                    </div>
                                    <div className="cart-item-details">
                                        <Link to={`/product/${item.id}`}>
                                            <h3>{item.name}</h3>
                                        </Link>
                                        <p className="cart-item-meta">
                                            Color: {item.color} | Size: {item.size}
                                        </p>
                                        <p className="cart-item-price">${item.price}</p>
                                    </div>
                                    <div className="cart-item-quantity">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                                            aria-label="Decrease quantity"
                                        >
                                            −
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                                            aria-label="Increase quantity"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="cart-item-total">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                    <button
                                        className="cart-item-remove"
                                        onClick={() => removeFromCart(item.id, item.size, item.color)}
                                        aria-label="Remove item"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <h2>Order Summary</h2>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                            </div>
                            {subtotal < 200 && (
                                <p className="shipping-notice">
                                    Add ${(200 - subtotal).toFixed(2)} more for free shipping
                                </p>
                            )}
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button className="btn btn-primary btn-checkout">
                                Proceed to Checkout
                            </button>
                            <Link to="/" className="btn btn-text continue-shopping">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
