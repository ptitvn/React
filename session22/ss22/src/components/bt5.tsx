import { Alert } from 'react-bootstrap';

function AlertGroup() {
  return (
    <div className="d-flex flex-column gap-3">
      <Alert variant="success" dismissible>
        Thêm tài khoản thành công.
      </Alert>
      <Alert variant="danger" dismissible>
        Thêm mới tài khoản thất bại.
      </Alert>
      <Alert variant="warning" dismissible>
        Tên không được để trống.
      </Alert>
    </div>
  );
}

export default AlertGroup;