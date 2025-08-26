import { useState,  } from 'react';

function Checkbox() {
  const hobbies = ['Đi chơi', 'Code', 'Ăn uống', 'Nhảy dây'];
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedHobbies((prev) =>
      isChecked ? [...prev, value] : prev.filter((hobby) => hobby !== value)
    );
  };

  return (
    <div>
      <p>Sở thích: [{selectedHobbies.map((hobby) => `"${hobby}"`).join(', ')}]</p>
      {hobbies.map((hobby) => (
        <div key={hobby}>
          <label>
            <input
              type="checkbox"
              value={hobby}
              checked={selectedHobbies.includes(hobby)}
              onChange={handleChange}
            />
            {hobby}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Checkbox;