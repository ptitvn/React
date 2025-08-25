import  { Component } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface State {
  showCart: boolean;
}

export default class bt7 extends Component<{}, State> {
  state: State = {
    showCart: false,
  };

  products: Product[] = [
    { id: 1, name: 'Điện thoại Samsung Galaxy', price: 20000000, image: 'https://via.placeholder.com/150?text=Samsung' },
    { id: 2, name: 'Điện thoại Iphone14 Promax', price: 20500000, image: 'https://via.placeholder.com/150?text=iPhone14' },
    { id: 3, name: 'Điện thoại Samsung Galaxy', price: 21000000, image: 'https://via.placeholder.com/150?text=Samsung2' },
    { id: 4, name: 'Điện thoại Iphone11 Promax', price: 21500000, image: 'https://via.placeholder.com/150?text=iPhone11' },
    { id: 5, name: 'Điện thoại Samsung Galaxy', price: 22000000, image: 'https://via.placeholder.com/150?text=Samsung3' },
    { id: 6, name: 'Điện thoại Samsung Galaxy', price: 22500000, image: 'https://via.placeholder.com/150?text=Samsung4' },
    { id: 7, name: 'Điện thoại Oppo A9', price: 23000000, image: 'https://via.placeholder.com/150?text=Oppo+A9' },
    { id: 8, name: 'Điện thoại Oppo V5', price: 23500000, image: 'https://via.placeholder.com/150?text=Oppo+V5' },
  ];

  cartItems: CartItem[] = [
    { product: this.products[0], quantity: 1 },
    { product: this.products[1], quantity: 1 },
    { product: this.products[2], quantity: 1 },
  ];

  toggleCart = () => {
    this.setState((prev) => ({ showCart: !prev.showCart }));
  };

  render() {
    const { showCart } = this.state;
    const total = this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const cartCount = this.cartItems.length;

    return (
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <header style={{ backgroundColor: '#ed9b4a', color: '#fff', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }}>Trang chủ</span>
            <span style={{ cursor: 'pointer' }}>Danh sách sản phẩm</span>
          </nav>
          <div style={{ cursor: 'pointer' }} onClick={this.toggleCart}>
            🛒 <span style={{ fontWeight: 'bold' }}>{cartCount}</span>
          </div>
        </header>

        <div style={{ padding: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px'}}>
            {this.products.map((product) => (
              <div key={product.id} style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '16px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
                <h3 style={{ margin: '0 0 6px' }}>{product.name}</h3>
                <p style={{ fontWeight: 'bold', color: '#1976d2' }}>{product.price.toLocaleString()} ₫</p>
                <button style={{ padding: '8px 12px', backgroundColor: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', width: '100%' }}>
                  Thêm vào giỏ hàng
                </button>
              </div>
            ))}
          </div>
        </div>

        {showCart && (
          <>
            <div
              onClick={this.toggleCart}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 999,
              }}
            />

            <div
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '320px',
                height: '50vh',
                backgroundColor: '#1c1c1c',
                color: '#fff',
                padding: '20px',
                boxShadow: '-2px 0 10px rgba(0,0,0,0.3)',
                zIndex: 1000,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h2 style={{ borderBottom: '1px solid #444', paddingBottom: '10px' }}>🛒 Giỏ hàng</h2>
                {this.cartItems.map((item, index) => (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>{item.product.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                      <button style={{ backgroundColor: '#333', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '4px' }}>➖</button>
                      <span>{item.quantity}</span>
                      <button style={{ backgroundColor: '#333', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '4px' }}>➕</button>
                      <span style={{ marginLeft: 'auto' }}>{(item.product.price * item.quantity).toLocaleString()} ₫</span>
                      <button style={{ backgroundColor: '#e53935', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '4px' }}>🗑️</button>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', borderTop: '1px solid #444', paddingTop: '10px' }}>
                Tổng tiền: {total.toLocaleString()} ₫
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

