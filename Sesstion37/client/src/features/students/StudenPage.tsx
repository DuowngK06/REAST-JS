import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentList from './StudentList';

const API_URL = 'http://localhost:8080/students';

const StudentPage: React.FC = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(res => setStudents(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Danh sách sinh viên</h2>
            <StudentList students={students} onEdit={() => { }} onDelete={() => { }} />
        </div>
    );
};

export default StudentPage;