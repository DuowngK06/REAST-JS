import { useEffect, useState } from "react";
import axios from "axios";

interface Student {
    id: number;
    student_name: string;
    email: string;
    address: string;
    phone: string;
    status: boolean;
    created_at: string;
}

async function getAllStudents(): Promise<Student[]> {
    try {
        const response = await axios.get<Student[]>("http://localhost:8000/students");
        console.log("Danh sách sinh viên:", response.data);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        return [];
    }
}

export default function bt3() {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        getAllStudents().then((data) => setStudents(data));
    }, []);

    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <ul>
                {students.map((s) => (
                    <li key={s.id}>
                        <strong>{s.student_name}</strong> - {s.email} - {s.phone} -{" "}
                        {s.status ? "Đang học" : "Nghỉ học"}
                    </li>
                ))}
            </ul>
        </div>
    );
}