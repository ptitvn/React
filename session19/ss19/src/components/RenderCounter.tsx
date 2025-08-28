import { useState, useRef, useEffect } from 'react';

const RenderCounter = () => {
  const [inputValue, setInputValue] = useState('');
  const renderCount = useRef(0); 

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Component Render Counter</h2>
      <label>
        Input:{' '}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <p>Component đã render: {renderCount.current} lần</p>
    </div>
  );
};

export default RenderCounter;