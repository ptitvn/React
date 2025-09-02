import { useState, useEffect } from 'react';

function PageTitle() {
  const [name, setName] = useState('');

  useEffect(() => {
    if (name.trim() === '') {
      document.title = 'React App';
    } else {
      document.title = `Chào mừng ${name}`;
    }
  }, [name]);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '400px', margin: '0 auto' }}>
      <label htmlFor="username" style={{ display: 'block', marginBottom: '8px', fontSize: '16px' }}>
        Nhập tên của bạn:
      </label>
      <input
        id="username"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tên của bạn..."
        style={{
          padding: '10px',
          width: '100%',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
}

export default PageTitle;