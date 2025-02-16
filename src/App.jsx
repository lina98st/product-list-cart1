import React, { useState } from 'react';
import './Index.css';
import './App.css';
import DessertCard from './components/DessertCard';
import Cart from './components/Cart';
import desserts from './data.json';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const addToCart = (dessert) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === dessert.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === dessert.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...dessert, quantity: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  const confirmOrder = () => {
    setOrderConfirmed(true);
  };

  const startNewOrder = () => {
    setCartItems([]);
    setOrderConfirmed(false);
  };

  return (
    <>
      <main>
        <div className="layout">
          <div className="container">
            <h1 className="desserts-h1">Desserts</h1>
            <div className="dessert-list">
              {desserts.map((dessert, index) => (
                <DessertCard
                  key={index}
                  image={dessert.image}
                  name={dessert.name}
                  category={dessert.category}
                  price={dessert.price}
                  addToCart={() => addToCart(dessert)}
                />
              ))}
            </div>
          </div>
          <div className="cart">
            <Cart cartItems={cartItems} onRemoveItem={removeFromCart} onConfirmOrder={confirmOrder} />
          </div>
        </div>
      </main>
      <div className="attribution">
  Challenge by <a href="https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d">Frontend Mentor</a>. 
  Coded by <a href="https://www.frontendmentor.io/profile/lina98st">Alina</a>.
</div>

      {/* Bestellbestätigung Popup */} 
      {orderConfirmed && (
        <div className="order-confirmation">
          <div className="order-content">
            <img src="assets/images/icon-order-confirmed.svg" alt="Order Confirmed" className="order-icon" />
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>

            {/* Bestellübersicht */}
            <ul className="order-items">
              {cartItems.map((item, index) => (
                <li key={index} className="order-item">
                  <img src={item.image.desktop} alt={item.name} className="order-item-image" />
                  <div className="order-item-details">
                    <h3>{item.name}</h3>
                    <span>{item.quantity}x @ ${item.price.toFixed(2)}</span>
                  </div>
                  <span className="order-item-total">${(item.quantity * item.price).toFixed(2)}</span>
                </li>
              ))}
            </ul>

            {/* Gesamtbetrag */}
            <div className="order-total">
              <span>Order Total</span>
              <span>${calculateTotal()}</span>
            </div>

            <button className="new-order" onClick={startNewOrder}>
              Start New Order
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
