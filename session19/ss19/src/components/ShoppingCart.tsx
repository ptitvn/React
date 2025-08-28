import { useMemo } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const cartItems: CartItem[] = [
  { id: 1, name: 'Sản phẩm A', price: 100000, quantity: 2 },
  { id: 2, name: 'Sản phẩm B', price: 200000, quantity: 1 },
];

function ShoppingCart() {
  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Giỏ hàng</h2>
      <div>
        {cartItems.map((item) => (
          <p key={item.id}>
            {item.name} - {item.quantity} x {item.price.toLocaleString()}₫
          </p>
        ))}
      </div>
      <h3>Tổng cộng: {totalPrice.toLocaleString()}₫</h3>
    </div>
  );
}

export default ShoppingCart;