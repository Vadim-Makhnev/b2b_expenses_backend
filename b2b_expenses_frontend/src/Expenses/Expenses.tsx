import "./Expenses.css"
import {useState} from "react";

interface User {
    id: number;
    name: string;
    email: string;
}


function Expenses() {
    const [users, setUsers] = useState<User[]>([
        {"id": 1, "name": "Алексей", "email": "alex@example.com"},
        {"id": 2, "name": "Мария", "email": "maria@example.com"},
        {"id": 3, "name": "Алексей", "email": "alex@example.com"},
        {"id": 4, "name": "Мария", "email": "maria@example.com"},
        {"id": 5, "name": "Алексей", "email": "alex@example.com"},
        {"id": 6, "name": "Мария", "email": "maria@example.com"},
        {"id": 7, "name": "Алексей", "email": "alex@example.com"},
        {"id": 8, "name": "Мария", "email": "maria@example.com"},
        {"id": 9, "name": "Алексей", "email": "alex@example.com"},
        {"id": 10, "name": "Мария", "email": "maria@example.com"},
        {"id": 11, "name": "Алексей", "email": "alex@example.com"},
        {"id": 12, "name": "Мария", "email": "maria@example.com"},
        {"id": 13, "name": "Алексей", "email": "alex@example.com"},
        {"id": 14, "name": "Мария", "email": "maria@example.com"},
        {"id": 15, "name": "Алексей", "email": "alex@example.com"},
        {"id": 16, "name": "Мария", "email": "maria@example.com"},
        {"id": 17, "name": "Алексей", "email": "alex@example.com"},
        {"id": 18, "name": "Мария", "email": "maria@example.com"},
        {"id": 19, "name": "Алексей", "email": "alex@example.com"},
        {"id": 20, "name": "Мария", "email": "maria@example.com"},
        {"id": 21, "name": "Алексей", "email": "alex@example.com"},
        {"id": 22, "name": "Мария", "email": "maria@example.com"},
        {"id": 23, "name": "Алексей", "email": "alex@example.com"},
        {"id": 24, "name": "Мария", "email": "maria@example.com"},
        {"id": 25, "name": "Алексей", "email": "alex@example.com"},
        {"id": 26, "name": "Мария", "email": "maria@example.com"},
        {"id": 27, "name": "Алексей", "email": "alex@example.com"},
        {"id": 28, "name": "Мария", "email": "maria@example.com"},
        {"id": 29, "name": "Алексей", "email": "alex@example.com"},
        {"id": 30, "name": "Мария", "email": "maria@example.com"}
    ]);


    return (
        <div className="panel-main">
            <div className="top-element">
                <img src="/Table.svg" alt="house" width={16} height={16}/>
                <span className="sidebar-text">Панель иснтрументов</span>
            </div>
            <div className="table-container">
                <table className="expenses-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Expenses;