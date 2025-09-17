import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

type Task = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get('http://localhost:3001/tasks')
      .then(res => setTasks(res.data));
  };

  const handleAddTask = () => {
    // Validate
    if (title.trim() === '') {
      setError('Tên công việc không được để trống');
      return;
    }
    if (tasks.some(task => task.title.trim().toLowerCase() === title.trim().toLowerCase())) {
      setError('Tên công việc không được trùng');
      return;
    }
    setError('');
    // Gọi API lưu công việc
    axios.post('http://localhost:3001/tasks', {
      title: title.trim(),
      description: description.trim()
    }).then(() => {
      setTitle('');
      setDescription('');
      inputRef.current?.focus();
      fetchTasks();
    });
  };

  const handleDeleteClick = (id: number) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  const handleConfirmDelete = () => {
    if (deleteId !== null) {
      axios.delete(`http://localhost:3001/tasks/${deleteId}`)
        .then(() => {
          setShowModal(false);
          setDeleteId(null);
          fetchTasks();
        });
    }
  };

  return (
    <div>
      <h2>Danh sách công việc</h2>
      <div style={{ marginBottom: 16 }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Tên công việc"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <input
          type="text"
          placeholder="Mô tả"
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <button onClick={handleAddTask}>Thêm công việc</button>
        {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
      </div>
      <ul
        style={{
          maxHeight: '200px',
          overflowY: tasks.length > 5 ? 'auto' : 'visible',
          padding: 0,
          margin: 0,
          listStyle: 'none'
        }}
      >
        {tasks.slice(0, 5).map(task => (
          <li key={task.id} style={{ marginBottom: 10, padding: 8, borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>
              <strong>{task.title}</strong>: {task.description}
            </span>
            <span
              style={{ cursor: 'pointer', color: 'red', marginLeft: 10 }}
              onClick={() => handleDeleteClick(task.id)}
              title="Xóa"
            >
              🗑️
            </span>
          </li>
        ))}
      </ul>

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            background: '#fff',
            padding: 24,
            borderRadius: 8,
            minWidth: 300,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}>
            <h3>Xác nhận xóa</h3>
            <p>Bạn có chắc chắn muốn xóa công việc này?</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button onClick={handleCancel}>Hủy</button>
              <button onClick={handleConfirmDelete} style={{ background: 'red', color: '#fff' }}>Xóa</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}