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

export default function Bt4() {
    const [students, setStudents] = useState<Student[]>([]);

    const getAllStudent = async () => {
        try {
            const response = await axios.get<Student[]>(
                "http://localhost:8000/students"
            );
            console.log("Danh sách sinh viên:", response.data);
            setStudents(response.data);
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);
        }
    };

    useEffect(() => {
        getAllStudent();
    }, []);

    return (
        <div>
            <h2>Lấy danh sách sinh viên</h2>
        </div>
    );
}