import { useState, useRef, useEffect } from 'react';

function ModalWithFocus() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div style={{ fontFamily: 'Arial', padding: '40px', textAlign: 'center' }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Mở Modal
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
            width: '300px',
          }}
        >
          <h3>Đăng nhập</h3>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '8px' }}>
            Nhập tên người dùng:
          </label>
          <input
            id="username"
            type="text"
            ref={inputRef}
            placeholder="Tên người dùng..."
            style={{
              padding: '10px',
              width: '100%',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginBottom: '20px',
            }}
          />
          <button
            onClick={() => setIsOpen(false)}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Đăng
          </button>
        </div>
      )}
    </div>
  );
}

export default ModalWithFocus;