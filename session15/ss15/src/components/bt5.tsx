import { Component } from 'react';

interface Student {
    id: number;
    code: string;
    name: string;
    dob: string;
    email: string;
    status: string;
}


interface State {
    students: Student[];
}

export default class bt5 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            students: [
                {
                    id: 1,
                    code: 'SV001',
                    name: 'Nguyễn Văn A',
                    dob: '21/12/2023',
                    email: 'nva@gmail.com',
                    status: 'Đang hoạt động',
                },
                {
                    id: 2,
                    code: 'SV002',
                    name: 'Nguyễn Thị B',
                    dob: '21/11/2022',
                    email: 'ntb@gmail.com',
                    status: 'Ngừng hoạt động',
                },
            ],
        };
    }

    render() {
        return (
            <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>Quản lý sinh viên</h2>

                    <button style={{ marginBottom: '10px', backgroundColor: 'blue', color: 'white' }}>Thêm mới sinh viên</button></div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <select style={{ marginLeft: '10px', padding: '5px' }}>
                        <option value="">sắp xếp theo tuổi</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Tìm kiếm theo tên hoặc email"
                        style={{ marginLeft: '10px', padding: '5px', }}
                    /></div>

                <table border={1} cellPadding={10} cellSpacing={0} style={{ marginTop: '20px', width: '100%' ,}}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Ngày sinh</th>
                            <th>Email</th>
                            <th>Trạng thái</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student, index) => (
                            <tr key={student.id}>
                                <td>{index + 1}</td>
                                <td>{student.code}</td>
                                <td>{student.name}</td>
                                <td>{student.dob}</td>
                                <td>{student.email}</td>
                                <td>{student.status}</td>
                                <td style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                                    <button>Chặn</button>
                                    <button>Sửa</button>
                                    <button>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', gap: '20px' }}>
                    <button style={{ border: '1px solid #919293', borderRadius: '50%', padding: '15px', height: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&lt;</button>
                    <button style={{ border:'none',background: '#0492ff', borderRadius: '50%', padding: '15px', color: 'white', height: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</button>
                    <button style={{ border: '1px solid #919293', borderRadius: '50%', padding: '15px', height: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</button>
                    <button style={{ border: '1px solid #919293', borderRadius: '50%', padding: '15px', height: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</button>
                    <button style={{ border: '1px solid #919293', borderRadius: '50%', padding: '15px', height: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>4</button>
                    <button style={{ border: '1px solid #919293', borderRadius: '50%', padding: '15px', height: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&gt;</button>

                </div>
            </div >
        );
    }
}

