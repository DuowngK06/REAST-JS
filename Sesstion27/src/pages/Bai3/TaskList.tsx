import React from 'react'

const tasks = [
    {
        id: 1,
        title: "Học React Router",
        description: "Làm quen với Dynamic Routes và useNavigate",
    },
    {
        id: 2,
        title: "Ôn lại Tailwind",
        description: "Thực hành tạo UI cơ bản bằng Tailwind CSS",
    },
    {
        id: 3,
        title: "Hoàn thành BTVN",
        description: "Đẩy code lên GitHub và nộp link",
    },
];

export default function TaskList() {
    return (
        <div>
            <h2>Danh sách công việc</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <strong>{task.title}</strong>: {task.description}
                    </li>
                ))}
            </ul>
        </div>
    );