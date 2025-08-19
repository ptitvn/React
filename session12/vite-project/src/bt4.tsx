import React from 'react';

interface ColorBoxProps {
    color: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
    const boxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        border: '1px solid black',
        fontSize: '24px'
    };

    return (
        <div style={boxStyle}>
            Box
        </div>
    );
};

export default ColorBox;
