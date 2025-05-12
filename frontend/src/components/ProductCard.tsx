import React from 'react';
import './styles.css';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  description
}) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price">${price.toFixed(2)}</div>
        <button className="product-button">Add to Cart</button>
      </div>
    </div>
  );
}; 