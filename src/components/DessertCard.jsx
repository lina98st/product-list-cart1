import React, { useState } from 'react';
import '../Index.css'; 
import '../App.css'; 
import DessertList from './DessertList';


const DessertCard = ({ image, name, category, price, addToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
      e.stopPropagation(); // Verhindert unerwünschte Event-Auslösung
      addToCart(); // Fügt das Dessert zum Warenkorb hinzu
      setQuantity((prev) => prev + 1); // Zeigt lokale Menge an (optional)
  };

  return (
      <div
          className="dessert-card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      >
          <img src={image.desktop} alt={name} className="dessert-image" />
          <button className="add-to-cart" onClick={handleAddToCart}>
              {isHovered ? (
                  <>
                      <img
                          src="assets/images/icon-decrement-quantity.svg"
                          alt="Decrease Quantity"
                          className="quantity-icon"
                          onClick={(e) => {
                              e.stopPropagation();
                              setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
                          }}
                      />
                      <span className="quantity-number">{quantity}</span>
                      <img
                          src="assets/images/icon-increment-quantity.svg"
                          alt="Increase Quantity"
                          className="quantity-icon"
                          onClick={(e) => {
                              e.stopPropagation();
                              setQuantity((prev) => prev + 1);
                          }}
                      />
                  </>
              ) : (
                  <>
                      <img
                          src="assets/images/icon-add-to-cart.svg"
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
