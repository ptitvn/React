import { useState } from 'react';

export default function ChangeColor() {
  const [color, setColor] = useState('black');

  const handleChangeToRed = () => {
    setColor('red');
  };

  return (
    <div>
      <h2 style={{ color: color }}>Tiêu đề văn bản</h2>
      <button onClick={handleChangeToRed}>Thay đổi màu</button>
    </div>
  );
}

