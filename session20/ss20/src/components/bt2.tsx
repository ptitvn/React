import { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Thông tin người dùng</h2>
      <input
        type="text"
        placeholder="Nhập tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '8px', marginBottom: '10px', display: 'block', width: '300px' }}
      />
      <input
        type="email"
        placeholder="Nhập email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '8px', marginBottom: '10px', display: 'block', width: '300px' }}
      />
      <button onClick={handleSubmit} style={{ padding: '8px 16px' }}>
        Gửi
      </button>

      {submitted && (
        <div style={{ marginTop: '20px' }}>
          <h3>Thông tin người dùng</h3>
          <p><strong>Tên:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;