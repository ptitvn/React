import React, { useState } from 'react';

function FormDangKy() {
  const [hoTen, setHoTen] = useState('');
  const [email, setEmail] = useState('');
  const [loiHoTen, setLoiHoTen] = useState('');
  const [loiEmail, setLoiEmail] = useState('');

  function kiemTraEmail(email: string): boolean {
    if (!email.includes('@')) return false;

    const parts = email.split('@');
    if (parts.length !== 2) return false;

    const local = parts[0];
    const domain = parts[1];

    if (local.trim() === '' || domain.trim() === '') return false;
    if (!domain.includes('.')) return false;

    const domainParts = domain.split('.');
    if (domainParts.some(part => part.trim() === '')) return false;

    return true;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let hopLe = true;

    if (hoTen.trim() === '') {
      setLoiHoTen('⚠️ Trường này là bắt buộc');
      hopLe = false;
    } else {
      setLoiHoTen('');
    }

    if (!kiemTraEmail(email)) {
      setLoiEmail('⚠️ Email không hợp lệ');
      hopLe = false;
    } else {
      setLoiEmail('');
    }

    if (hopLe) {
      alert(`Đăng ký thành công:\nHọ tên: ${hoTen}\nEmail: ${email}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
      <h2>Đăng ký thông tin</h2>

      <label htmlFor="hoTen">Họ tên:</label>
      <input
        type="text"
        id="hoTen"
        placeholder="Nhập họ tên..."
        value={hoTen}
        onChange={(e) => setHoTen(e.target.value)}
        style={{ width: '80%', padding: '8px', marginTop: '4px' }}
      />
      {loiHoTen && <p style={{ color: 'red', marginTop: '4px' }}>{loiHoTen}</p>}

      <label htmlFor="email" style={{ marginTop: '12px', display: 'block' }}>Email:</label>
      <input
        type="text"
        id="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '80%', padding: '8px', marginTop: '4px'  }}
      />
      {loiEmail && <p style={{ color: 'red', marginTop: '4px' }}>{loiEmail}</p>}

      <button type="submit" style={{ marginTop: '16px' , width:'50%', backgroundColor: 'blue', color: 'white' ,border:'none',height:'30px'}}>Gửi</button>
    </form>
  );
}

export default FormDangKy;