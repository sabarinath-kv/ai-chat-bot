import React from 'react';
import "./ChatProductCard.css";

interface ProductCardProps {
  data: unknown;
}

export const ChatProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const renderCard = (product: { title: string; price: number; image: string; description: string }, index: number) => (
    <div className="chat-product-card" key={index}>
      <div className="chat-product-image">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      <div className="chat-product-info">
        <h3 className="chat-product-title">{product.title}</h3>
        <p className="chat-product-description">{product.description}</p>
        <div className="chat-product-price">${product.price.toFixed(2)}</div>
      </div>
    </div>
  );

  if (Array.isArray(data)) {
    return <div className="chat-product-grid">{data.map(renderCard)}</div>;
  }

  return renderCard(data as { title: string; price: number; image: string; description: string }, 0);
};