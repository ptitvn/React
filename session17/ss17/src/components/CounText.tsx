import { useState } from 'react';

function CountText() {
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        placeholder="Nhập nội dung"
        value={text}
        onChange={handleChange}
        rows={4}
        cols={50}
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}

export default CountText;