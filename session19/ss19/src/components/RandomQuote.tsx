import { useState } from 'react';

function RandomQuote() {
  const quotes = [
    "Sự học như con thuyền ngược nước, không tiến ắt phải lùi.",
    "Học, học nữa, học mãi.",
    "Thiên tài chỉ có 1% là cảm hứng, 99% còn lại là mồ hôi và công sức.",
    "Không có gì là không thể.",
    "Muốn đi nhanh thì đi một mình, muốn đi xa thì đi cùng nhau.",
    "Trung thu hãy về tuyên quang chơi nha",
    "tín hiệu vũ trụ bạn cần đi ăn nướng ngay bây giờ",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  function layCauNoiMoi() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Câu nói truyền cảm hứng hôm nay:</h2>
      <div style={{
        border: '1px solid #ccc',
        padding: '16px',
        borderRadius: '8px',
        fontStyle: 'italic',
        backgroundColor: '#f9f9f9'
      }}>
        {quote}
      </div>
      <button
        onClick={layCauNoiMoi}
        style={{
          marginTop: '16px',
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Lấy câu nói mới
      </button>
    </div>
  );
}

export default RandomQuote;