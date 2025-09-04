import { Form, FormControl } from 'react-bootstrap';

function InputGroup() {
  return (
    <Form className="d-flex flex-column gap-3">
      <FormControl size="lg" placeholder="Input cỡ lớn" />
      <FormControl placeholder="Input cỡ trung bình" /> 
      <FormControl size="sm" placeholder="Input cỡ nhỏ" />
    </Form>
  );
}

export default InputGroup;