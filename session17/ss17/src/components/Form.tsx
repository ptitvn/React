import React, { useState } from 'react';

function Form() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập nội dung"
        value={inputValue}
        onChange={handleChange}
      />
      <p>{inputValue}</p>
    </div>
  );
}

export default Form;