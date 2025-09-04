import { Dropdown } from 'react-bootstrap';

function UserDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Nguyễn Văn Nam
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#settings">Cài đặt</Dropdown.Item>
        <Dropdown.Item href="#change-password">Đổi mật khẩu</Dropdown.Item>
        <Dropdown.Item href="#logout">Đăng xuất</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserDropdown;