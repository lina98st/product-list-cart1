import React from 'react';
import '../App.css'; 

const DessertCard = ({ image, name, category, price }) => {
    return (
        <div className="dessert-card">
            <img src={image.desktop} alt={name} className="dessert-image" />
            <h2 className="dessert-name">{name}</h2>
            <p className="dessert-category">{category}</p>
            <p className="dessert-price">${price.toFixed(2)}</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default DessertCard;