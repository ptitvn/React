import { useState, type ChangeEvent } from 'react';

export default function Select() {
  const [selectedCity, setSelectedCity] = useState<string>('');

  const cities: string[] = [
    'Ninh Bình',
    'Hà Nam',
    'Hà Nội',
    'Nam Định',
    'Thanh Hóa',
    'Nghệ An',
    'Tuyên Quang'
  ];

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <label htmlFor="city">Thành phố:</label>
      <select id="city" value={selectedCity} onChange={handleChange}>
        <option value="">-- Chọn thành phố --</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      {selectedCity && <p>Thành phố: {selectedCity}</p>}
    </div>
  );
}

