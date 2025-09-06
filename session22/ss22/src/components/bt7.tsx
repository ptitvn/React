import { Alert } from 'antd';

function WarningToast() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Alert
        message="Cảnh báo"
        description="Lỗi kết nối máy chủ."
        type="warning"
        showIcon
        closable
      />
    </div>
  );
}

export default WarningToast;