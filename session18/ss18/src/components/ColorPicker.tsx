import { useState, useCallback } from 'react';

function ColorPicker() {
    const [color, setColor] = useState('');

    const handleChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }, []);

    return (
        <div>
            <h2>màu người dùng chọn</h2>
            <input type="color" value={color} onChange={handleChangeColor} />
            <div style={{ marginTop: '20px' }}>
                <p>Màu hiển thị:</p>
                <div style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: color || '#ffffff',
                    border: '1px solid #ccc'
                }} />

            </div>
        </div>
    );
}

export default ColorPicker;