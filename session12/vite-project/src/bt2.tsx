import React from 'react';

const Calculation: React.FC = () => {
    const add = (a: number, b: number) => a + b;
    const subtract = (a: number, b: number) => a - b;
    const multiply = (a: number, b: number) => a * b;
    const divide = (a: number, b: number) => a / b;

    // Các giá trị cho phép tính
    const a = 10;
    const b = 10;

    return (
        <div>
            <h2>Danh sách kết quả</h2>
            <ul>
                <li>{a} + {b} = {add(a, b)}</li>
                <li>{a} - {b} = {subtract(a, b)}</li>
                <li>{a} * {b} = {multiply(a, b)}</li>
                <li>{a} / {b} = {divide(a, b)}</li>
            </ul>
        </div>
    );
};

export default Calculation;
