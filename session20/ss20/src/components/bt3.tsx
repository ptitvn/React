import { useEffect } from 'react';

function Welcome() {
  useEffect(() => {
    console.log(' component đã được render lần đầu');
  }, []); 

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Chào mừng bạn đến với ứng dụng của chúng tôi!</h2>
    </div>
  );
}

export default Welcome;