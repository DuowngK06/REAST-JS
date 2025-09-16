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

export default function Bt5() {
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

    const getStudentById = async (id: number) => {
        try {
            const response = await axios.get<Student>(
                `http://localhost:3000/students/${id}`
            );
            if (response.data) {
                console.log("Thông tin sinh viên:", response.data);
            } else {
                console.log("Không tìm thấy bản ghi");
            }
        } catch (error) {
            console.log("Không tìm thấy bản ghi");
        }
    };

    useEffect(() => {
        getAllStudent();
        getStudentById(1);
        getStudentById(9);
    }, []);

    return (
        <div>
            <h2>Lấy danh sách & chi tiết sinh viên</h2>
        </div>
    );
}