import React from 'react';
import { ProductCard } from './ProductCard';
import './styles.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description: "Premium wireless headphones with noise cancellation and exceptional sound quality."
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description: "Feature-rich smartwatch with health tracking and notifications."
  },
  {
    id: 3,
    title: "Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    description: "Powerful laptop for work and entertainment with long battery life."
  },
  {
    id: 4,
    title: "Smartphone",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    description: "Latest smartphone with advanced camera system and 5G capability."
  },
  {
    id: 5,
    title: "Tablet",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500",
    description: "Versatile tablet perfect for creativity and productivity."
  },
  {
    id: 6,
    title: "Gaming Console",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500",
    description: "Next-gen gaming console for immersive gaming experience."
  }
];

export const ProductList: React.FC = () => {
  return (
    <div className="products-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
}; 