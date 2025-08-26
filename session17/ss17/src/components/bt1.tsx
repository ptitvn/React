import { useState } from 'react';

const bt1 = () => {
  const [name] = useState<string>('Nguyễn Văn A');

  return (
    <div>
      <h2>Họ và tên: {name}</h2>
    </div>
  );
};

export default bt1;