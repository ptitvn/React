import { useState } from 'react';

function StringLengthChecker() {
  const [inputValue, setInputValue] = useState('');

  const isValid = inputValue.length > 5;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nhập chuỗi..."
        style={{ padding: '8px', width: '300px' }}
      />
      {inputValue && (
        <p style={{ color: isValid ? 'green' : 'red', marginTop: '10px' }}>
          {isValid
            ? 'Chuỗi nhập vào lớn hơn 5 ký tự!'
            : 'Chuỗi nhập vào không hợp lệ!.'}
        </p>
      )}
    </div>
  );
}

export default StringLengthChecker;     