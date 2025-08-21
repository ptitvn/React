import React, { Component } from 'react';

interface State {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
}

export default class Exersice05 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      productCode: '',
      productName: '',
      price: 0,
      quantity: 0,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState({
      [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
    } as unknown as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '210px', border: '1px solid #ccc', padding: '16px', alignItems: 'center' }}>
        <h3>Thêm sản phẩm mới</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }} >
          <label>Mã sản phẩm:</label>
          <input
            type="text"
            name="productCode"
            value={this.state.productCode}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          <label>Tên sản phẩm:</label>
          <input
            type="text"
            name="productName"
            value={this.state.productName}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          <label>Giá:</label>
          <input
            type="number"
            name="price"
            value={this.state.price === 0 ? '' : this.state.price}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          <label>Số lượng:</label>
          <input
            type="number"
            name="quantity"
            value={this.state.quantity === 0 ? '' : this.state.quantity}
            onChange={this.handleChange}
          />
        </div>
        
        <button type="submit" style={{ width: '100%', height: '30px', border: 'none', backgroundColor: '#1d37e4', color: 'white', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer', borderRadius: '4px' }}>Đăng ký</button>
      </form>
    );
  }
}
