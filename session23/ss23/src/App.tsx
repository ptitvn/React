import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import type { Product } from "./components/types";
const LS_KEY = "products_data";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(LS_KEY);
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts([
        {
          id: 1,
          name: "Laptop Dell XPS 13",
          price: 29990000,
          inStock: true,
          marked: false
        },
        {
          id: 2,
          name: "Chuột Logitech MX Master 35",
          price: 2490000,
          inStock: false,
          marked: false 
        },
        {
          id: 3,
          name: "Bàn phím Keychron K6",
          price: 2190000,
          inStock: true,
          marked: false
        },
      ]);
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem(LS_KEY, JSON.stringify(products));
    }
  }, [products]);

  const handleAddProduct = (name: string, price: number, inStock: boolean) => {
    const newProduct: Product = {
      id: Date.now(),
      name,
      price,
      inStock,
      marked: false
    };
    setProducts((prev) => [newProduct, ...prev]);
  };

  const handleToggleInStock = (id: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, inStock: !p.inStock } : p,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div style={{ width: "100%", margin: "30px auto", fontFamily: "Arial, sans-serif", backgroundColor: "#f0f2f5", padding: 20, borderRadius: 8 }}>
      <Header />
      <AddProduct onAdd={handleAddProduct} />
      <ProductList
        products={products}
        onToggleInStock={handleToggleInStock}
        onDelete={handleDelete}
      />
    </div>
  );
}
