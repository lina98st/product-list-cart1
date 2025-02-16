import React from 'react';
import { useState } from 'react'
import desserts from '../data.json'; //Import json data for desserts
import DessertCard from './DessertCard';
import '../Index.css'; 
import '../App.css'; 

const DessertList = () => (
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
);

export default DessertList;