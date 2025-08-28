import React, { useState } from 'react';

export default function Todolist() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<string[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleAdd = () => {
        if (task.trim() === '') return;
        if (editIndex !== null) {
            const newTasks = [...tasks];
            newTasks[editIndex] = task;
            setTasks(newTasks);
            setEditIndex(null);
        } else {
            setTasks([...tasks, task]);
        }
        setTask('');
    };

    const handleDelete = (index: number) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        if (editIndex === index) setEditIndex(null);
    };

    const handleEdit = (index: number) => {
        setTask(tasks[index]);
        setEditIndex(index);
    };

    return (
        <div>
            <h1>Thêm công việc</h1>
            <input
                type="text"
                placeholder="Nhập công việc"
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            <button onClick={handleAdd}>{editIndex !== null ? 'Cập nhật' : 'Thêm công việc'}</button>
            <h1>Danh sách công việc</h1>
            <ul>
                {tasks.map((t, i) => (
                    <li key={i}>
                        {t}
                        <button onClick={() => handleDelete(i)}>Xóa</button>
                        <button onClick={() => handleEdit(i)}>Sửa</button>
                    </li>
                ))}
            </ul>
        </div>