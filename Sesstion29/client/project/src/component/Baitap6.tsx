import { useEffect, useState } from "react";
import axios from "axios";

interface Student {
    id?: number;
    student_name: string;
    email: string;
    address: string;
    phone: string;
    status: boolean;
    created_at: string;
}

export default function Bt6() {
    const [students, setStudents] = useState<Student[]>([]);

    const getAllStudent = async () => {
        try {
            const response = await axios.get<Student[]>(
                "http://localhost:3000/students"
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

    const createStudent = async () => {
        const newStudent: Student = {
            student_name: "Nguyen Van Moi",
            email: "moi@example.com",
            address: "Hà Nội",
            phone: "0911222333",
            status: true,
            created_at: new Date().toISOString().split("T")[0],
        };

        try {
            const response = await axios.post<Student>(
                "http://localhost:8000/students",
                newStudent
            );
            console.log("Sinh viên mới đã thêm:", response.data);
        } catch (error) {
            console.error("Lỗi khi thêm sinh viên:", error);
        }
    };

    useEffect(() => {
        getAllStudent();
        getStudentById(1);
        createStudent();
    }, []);

    return (
        <div >
            <h2>CRUD Sinh viên</h2>

        </div>
    );
}