import { useState } from 'react'
import './Index.css'
import './App.css'
import DessertCard from './components/DessertCard';
import desserts from '../data.json'; //Import json data for desserts

function App() {

  return (
<>

<main>
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
    />
  ))}
</div>
<section className="cart">
  <h2>Your Cart</h2>
  <p>Your added items items will appear here</p>
</section>
</div>
<div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/lina98st">Your Name Here</a>.
  </div>
      </main>
      </>
  );
}

export default App;