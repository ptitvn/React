import { useState } from 'react';

const App = () => {
  const [name] = useState<string>('Nguyễn Văn A');

  return (
    <div>
      <h2>Họ và tên: {name}</h2>
    </div>
  );
};

export default App;