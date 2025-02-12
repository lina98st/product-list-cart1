import React, { useState } from 'react';
import '../Index.css'; 
import '../App.css'; 
import DessertList from './DessertList';


const DessertCard = ({ image, name, category, price }) => {
    const [quantity, setQuantity] = useState(0); // Menge
    const [isHovered, setIsHovered] = useState(false); // Hover-Zustand
  
    // Funktionen zum Erhöhen und Verringern der Menge
    const incrementQuantity = (e) => {
      e.stopPropagation(); // Verhindert das Auslösen anderer Events
      setQuantity((prev) => prev + 1);
    };
  
    const decrementQuantity = (e) => {
      e.stopPropagation(); // Verhindert das Auslösen anderer Events
      setQuantity((prev) => (prev > 0 ? prev - 1 : 0)); // Verhindert negative Werte
    };
  
    return (
        <div
          className="dessert-card"
          onMouseEnter={() => setIsHovered(true)} // Hover aktivieren
          onMouseLeave={() => setIsHovered(false)} // Hover deaktivieren
        >
          <img src={image.desktop} alt={name} className="dessert-image" />
          <button className="add-to-cart">
            {isHovered ? ( // Inhalt des Buttons beim Hover ändern
              <>
                <img
                  src="/assets/images/icon-decrement-quantity.svg"
                  alt="Decrease Quantity"
                  className="quantity-icon"
                  onClick={decrementQuantity} // Decrement-Handler
                />
                <span className="quantity-number">{quantity}</span>
                <img
                  src="/assets/images/icon-increment-quantity.svg"
                  alt="Increase Quantity"
                  className="quantity-icon"
                  onClick={incrementQuantity} // Increment-Handler
                />
              </>
            ) : (
              // Add to Cart mit SVG-Icon
              <>
                <img
                  src="/assets/images/icon-add-to-cart.svg"
                  alt="Add to Cart"
                  className="add-to-cart-icon"
                />
                Add to Cart
              </>
            )}
          </button>
          <p className="dessert-category">{category}</p>
          <h2 className="dessert-name">{name}</h2>
          <p className="dessert-price">${price.toFixed(2)}</p>
        </div>
      );
      
  };
  
  export default DessertCard;