import React, { useState } from 'react';
import './Index.css';
import './App.css';
import DessertList from './components/DessertList';
import DessertCard from './components/DessertCard';
import Cart from './components/Cart';
import desserts from './data.json';


function App() {
  // Zustand für den Warenkorb
  const [cartItems, setCartItems] = useState([]);

  // Funktion zum Hinzufügen eines Produkts zum Warenkorb
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

  // Funktion zum Entfernen eines Produkts aus dem Warenkorb
  const removeFromCart = (index) => {
    setCartItems((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
<>

<main>
<div className="layout">
<div className="container">
  <div className="ueberschrift">
<h1 className="desserts-h1">Desserts</h1>
</div>
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
    <Cart cartItems={cartItems} onRemoveItem={removeFromCart} />
</div>
</div>
<div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/lina98st">Alina</a>.
  </div>
      </main>
      </>
  );
}

export default App;