import { useState } from 'react';

function ProductInfo() {
  const [product] = useState({
    id: 1,
    name: 'Coca cola',
    price: 1000,
    quantity: 10,
  });

  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <p><strong>Id:  {product.id}</strong></p>
      <p><strong>Name: {product.name}</strong> </p>
      <p><strong>Price: {product.price}</strong>  $</p>
      <p><strong>Quantity: {product.quantity}</strong> </p>
    </div>
  );
}

export default ProductInfo;