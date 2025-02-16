import React from 'react';
import '../Index.css';
import '../App.css';

const Cart = ({ cartItems, onRemoveItem, onConfirmOrder }) => {
  return (
    <section className="inner-cart">
      <h2>Your Cart ({cartItems.length})</h2>

      {/* Wenn der Warenkorb leer ist, zeige das Bild */}
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img
            src="assets/images/illustration-empty-cart.svg" 
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
                <h3>{item.name}</h3>
                <div className="cart-item-details">
                  <span>{item.quantity}x</span>
                  <span>@ ${item.price.toFixed(2)}</span>
                  <span>= ${(item.quantity * item.price).toFixed(2)}</span>
                </div>
                <button className="remove-item" onClick={() => onRemoveItem(index)}>
                  <img
                    src="assets/images/icon-remove-item.svg"
                    alt="Remove Item"
                    className="remove-item-icon"
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-total">
          <span className="order-font">Order Total</span>
            <span>${cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}</span>
          </div>
        </>
      )}

      {/* 🔥 "Carbon Neutral" bleibt IMMER sichtbar, auch wenn der Warenkorb leer ist */}
      <p className="carbon-delivery">
        <img
          src="assets/images/icon-carbon-neutral.svg" 
          alt="Carbon Neutral Icon"
          className="carbon-icon"
        />
        This is a carbon-neutral delivery
      </p>

      {/* 🔥 Der "Confirm Order"-Button erscheint NUR, wenn Produkte im Warenkorb sind */}
      {cartItems.length > 0 && (
        <button className="confirm-order" onClick={onConfirmOrder}>
          Confirm Order
        </button>
      )}
    </section>
  );
};

export default Cart;
