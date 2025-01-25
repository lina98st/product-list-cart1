import React from 'react';
import '../Index.css'; 
import '../App.css'; 
import DessertList from './DessertList';


const DessertCard = ({ image, name, category, price }) => {
    return (
        <div className="dessert-card">
            <img src={image.desktop} alt={name} className="dessert-image" />
            <button className="add-to-cart">Add to Cart</button>
            <p className="dessert-category">{category}</p>
            <h2 className="dessert-name">{name}</h2>
            <p className="dessert-price">${price.toFixed(2)}</p>
        </div>
    );
};

export default DessertCard;
