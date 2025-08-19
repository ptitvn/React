import React from 'react';

interface ColorBoxProps {
    color: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
    return (
        <div style={{
            width: '200px',
            height: '200px',
            backgroundColor: color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '24px'
        }}>
            Box
        </div>
    );
};

export default ColorBox;
