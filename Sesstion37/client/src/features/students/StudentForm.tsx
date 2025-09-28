import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import type { Student } from './types';

interface Props {
  open: boolean;
  initial?: Partial<Student>;
  onClose: () => void;
  onSubmit: (data: { id?: string; name: string; age: number; grade: string }) => void;
  students: Student[]; // Thêm prop này để kiểm tra trùng tên
}

const StudentForm: React.FC<Props> = ({ open, initial = {}, onClose, onSubmit, students }) => {
  const [name, setName] = useState(initial.name ?? '');
  const [age, setAge] = useState(initial.age ?? 16);
  const [grade, setGrade] = useState(initial.grade ?? '');
  const [errors, setErrors] = useState<{ name?: string; age?: string; grade?: string }>({});

  useEffect(() => {
    setName(initial.name ?? '');
    setAge(initial.age ?? 16);
    setGrade(initial.grade ?? '');
    setErrors({});
  }, [initial, open]);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) {
      newErrors.name = 'Tên sinh viên không được để trống';
    } else {
      // Kiểm tra trùng tên (không phân biệt hoa thường, trừ chính nó khi sửa)
      const isDuplicate = students.some(
        (s) =>
          s.name.trim().toLowerCase() === name.trim().toLowerCase() &&
          s.id !== initial.id
      );
      if (isDuplicate) {
        newErrors.name = 'Tên sinh viên đã tồn tại';
      }
    }
    if (age === '' || age === null || isNaN(Number(age))) {
      newErrors.age = 'Tuổi sinh viên không được bỏ trống';
    } else if (Number(age) <= 0) {
      newErrors.age = 'Tuổi sinh viên phải lớn hơn 0';
    }
    if (!grade.trim()) {
      newErrors.grade = 'Tên lớp học không được để trống';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      id: initial.id,
      name: name.trim(),
      age: Number(age),
      grade: grade.trim(),
    });
    setName('');
    setAge(16);
    setGrade('');
    setErrors({});
    // Focus lại vào input tên
    setTimeout(() => {
      const input = document.querySelector<HTMLInputElement>('input[name="student-name"]');
      if (input) input.focus();
    }, 0);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>{initial.id ? 'Edit Student' : 'Add Student'}</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField
            label="Name"
            name="student-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            autoFocus
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            fullWidth
            inputProps={{ min: 1 }}
            error={!!errors.age}
            helperText={errors.age}
          />
          <TextField
            label="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            fullWidth
            placeholder="e.g. 10A1"
            error={!!errors.grade}
            helperText={errors.grade}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {initial.id ? 'Save' : 'Add'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default StudentForm;