import React from 'react';
import './Index.css';
import './App.css';
import DessertList from './components/DessertList';
import DessertCard from './components/DessertCard';
import desserts from './data.json';


function App() {

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
    />
  ))}
</div>
</div>
<div className="cart">
  <section className="inner-cart">
  <h2>Your Cart</h2>
<p>This is a carbon-neutral delivery</p>
  </section>
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