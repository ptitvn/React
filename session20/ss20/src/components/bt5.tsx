import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log('Timer component unmounted, interval cleared');
    };
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h2>Bộ đếm thời gian</h2>
      <p>Giá trị hiện tại: {count}</p>
    </div>
  );
}

export default Timer;