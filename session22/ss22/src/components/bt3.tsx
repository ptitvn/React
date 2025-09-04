import { Card, Button, Row, Col } from 'react-bootstrap';

const products = [
  {
    name: 'MacBook Air 2018',
    description:
      'The reason I am selling the machine is because it is too much machine for what I need.',
    image: '/images/macbook-air.jpg',
    price: '18.000.000₫',
  },
  {
    name: 'MacBook Pro 2019',
    description:
      'The reason I am selling the machine is because it is too much machine for what I need.',
    image: '/images/macbook-pro.jpg',
    price: '24.500.000₫',
  },
];

function Cart() {
  return (
    <div className="container mt-4">
      <Row className="g-4">
        {products.map((product, index) => (
          <Col key={index} md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <Button variant="primary">Xem chi tiết</Button>
                  <span >{product.price}</span>
                  
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cart;