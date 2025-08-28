import React, { useMemo } from "react";

interface User {
    id: number;
    name: string;
    age: number;
}

const UserList: React.FC = () => {
    const users: User[] = [
        { id: 1, name: "Duong", age: 19 },
        { id: 2, name: "Minh Chau", age: 20 },
        { id: 3, name: "Hoang pho lo", age: 22 },
        { id: 4, name: "Dat Sex", age: 19 },
        { id: 5, name: "Luong Chi", age: 20 },
    ];

    const adultUsers = useMemo(() => {
        return users.filter((user) => user.age > 18);
    }, [users]);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Danh sách người dùng trên 18 tuổi</h2>
            <ul>
                {adultUsers.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age} tuổi
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;