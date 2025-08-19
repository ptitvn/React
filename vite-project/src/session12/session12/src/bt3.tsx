import React from 'react';
const UserInfo: React.FC = () => {
    const user = {
        fullName: "Nguyễn Văn A",
        gender: "Nam",
        birthDate: "06/03/2024",
        email: "nva@gmail.com",
        address: "Thanh Xuân, Hà Nội"
    };

    return (
        <div>
            <h2 style={{textAlign: "center" , fontSize: "20px"}}>Thông tin cá nhân</h2>
            <ul>
                <li>Họ và tên: <b>{user.fullName}</b></li>
                <li>Giới tính: <b>{user.gender}</b></li>
                <li>Ngày sinh: <b>{user.birthDate}</b></li>
                <li>Email: <b>{user.email}</b></li>
                <li>Địa chỉ: <b>{user.address}</b></li>
            </ul>
        </div>
    );
};
export default UserInfo;