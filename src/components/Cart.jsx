import React from 'react';
import '../Index.css';
import '../App.css';

const Cart = ({ cartItems, onRemoveItem }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  return (
    <section className="inner-cart">
      <h2>Your Cart ({cartItems.length})</h2>

      {/* 🛒 Wenn der Warenkorb leer ist, zeige das Bild */}
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img
            src="/assets/images/illustration-empty-cart.svg" // Stelle sicher, dass der Pfad korrekt ist!
            alt="Empty Cart"
            className="empty-cart-image"
          />
          <p className="empty-cart-text">Your cart is empty</p>
        </div>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-details">
                  <span>{item.name}</span>
                  <button className="remove-item" onClick={() => onRemoveItem(index)}> {/* ❌ Entfernen */}
                    <img
                      src="/assets/images/icon-remove-item.svg"
                      alt="Remove Item"
                      className="remove-item-icon"
                    />
                  </button>
                </div>
                <div className="cart-item-pricing">
                  <span>{item.quantity}x @${item.price.toFixed(2)}</span>
                  <span>${(item.quantity * item.price).toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <span>Order Total</span>
            <span>${calculateTotal()}</span>
          </div>
        </>
      )}

      <p className="carbon-delivery">This is a carbon-neutral delivery</p>
    </section>
  );
};

export default Cart;
