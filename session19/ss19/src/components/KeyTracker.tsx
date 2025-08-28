import { useState, useEffect } from 'react';

function KeyTracker() {
  const [keyPressed, setKeyPressed] = useState('');

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      setKeyPressed(event.key);
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Phím bạn vừa nhấn:</h2>
      <div style={{
        border: '1px solid #ccc',
        padding: '16px',
        borderRadius: '8px',
        fontSize: '24px',
        fontWeight: 'bold',
        backgroundColor: '#f0f0f0'
      }}>
        {keyPressed ? `[${keyPressed}]` : 'Chưa có phím nào được nhấn'}
      </div>
    </div>
  );
}

export default KeyTracker;