import { useMemo } from 'react';

function UserList() {
    const users = [
        { id: 1, name: 'An', age: 17 },
        { id: 2, name: 'Bình', age: 22 },
        { id: 3, name: 'Cường', age: 19 },
        { id: 4, name: 'Dũng', age: 15 },
        { id: 5, name: 'Hà', age: 25 },
    ];

    const filteredUsers = useMemo(() => {
        return users.filter(user => user.age > 18);
    }, [users]); 

    return (
        <div>
            <h2>Danh sách người dùng trên 18 tuổi</h2>
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.age} tuổi)
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;